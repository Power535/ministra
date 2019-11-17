<?php

namespace Ministra\Admin\Model;

class VideoClubModel extends \Ministra\Admin\Model\BaseMinistraModel
{
    public function __construct()
    {
        parent::__construct();
    }
    public function getTotalRowsVideoList($where = array(), $like = array())
    {
        $params = ['where' => $where, 'like' => [], 'order' => []];
        if (!empty($like)) {
            $params['like'] = $like;
        }
        return $this->getVideoList($params, true);
    }
    public function getVideoList($param, $counter = false)
    {
        if (!empty($param['select'])) {
            $this->mysqlInstance->select($param['select']);
        }
        $this->mysqlInstance->from('video')->join('media_claims', 'video.id', 'media_claims.media_id and media_claims.media_type = "vclub"', 'LEFT')->join('video_on_tasks', 'video.id', 'video_on_tasks.video_id', 'LEFT');
        if (!empty($param['where'])) {
            $this->mysqlInstance->where($param['where']);
        }
        if (!empty($param['like'])) {
            $this->mysqlInstance->like($param['like'], 'OR');
        }
        if (!empty($param['order'])) {
            $this->mysqlInstance->orderby($param['order']);
        }
        if (!empty($param['limit']['limit'])) {
            $this->mysqlInstance->limit($param['limit']['limit'], $param['limit']['offset']);
        }
        return $counter ? $this->mysqlInstance->count()->get()->counter() : $this->mysqlInstance->get()->all();
    }
    public function getVideoById($id)
    {
        return $this->mysqlInstance->from('video')->where(['id' => $id])->get()->first();
    }
    public function videoLogWrite($video, $text, $moderator_id = null)
    {
        if ($moderator_id === null) {
            $moderator_id = $this->admin ? $this->admin->getId() : false;
        }
        return $this->mysqlInstance->insert('video_log', ['action' => $text, 'video_id' => $video['id'], 'video_name' => $video['name'], 'moderator_id' => $moderator_id, 'actiontime' => 'NOW()'])->insert_id();
    }
    public function getTotalRowsVideoLog($where = array(), $like = array())
    {
        $this->mysqlInstance->count()->from('video_log')->join('administrators', 'video_log.moderator_id', 'administrators.id', 'LEFT')->where($where);
        if (!empty($like)) {
            $this->mysqlInstance->like($like, 'OR');
        }
        return $this->mysqlInstance->get()->counter();
    }
    public function getVideoLog($param)
    {
        if (!empty($param['select'])) {
            $this->mysqlInstance->select($param['select']);
        }
        $this->mysqlInstance->from('video_log')->join('administrators', 'video_log.moderator_id', 'administrators.id', 'LEFT')->join('video', 'video_log.video_id', 'video.id', 'LEFT')->where($param['where'])->like($param['like'], 'OR')->orderby($param['order']);
        if (!empty($param['limit']['limit'])) {
            $this->mysqlInstance->limit($param['limit']['limit'], $param['limit']['offset']);
        }
        return $this->mysqlInstance->get()->all();
    }
    public function removeVideoById($video_id)
    {
        $date = new \DateTime();
        $this->mysqlInstance->update('moderator_tasks', ['ended' => 1, 'rejected' => 1, 'end_time' => $date->format('Y-m-d H:i:s')], ['media_id' => $video_id, 'media_type' => 2]);
        return $this->mysqlInstance->delete('video', ['id' => $video_id])->total_rows();
    }
    public function disableVideoById($video_id)
    {
        return $this->mysqlInstance->update('video', ['accessed' => 0, 'added' => 'NOW()'], ['id' => $video_id])->total_rows();
    }
    public function enableVideoById($video_id)
    {
        $this->mysqlInstance->update('updated_places', ['vclub' => 1]);
        return $this->mysqlInstance->update('video', ['accessed' => 1, 'added' => 'NOW()'], ['id' => $video_id])->total_rows();
    }
    public function toggleDisableForHDDevices($video, $val)
    {
        if ($video['hd'] && $val) {
            return $this->mysqlInstance->update('video', ['disable_for_hd_devices' => 1], ['name' => $video['name'], 'o_name' => $video['o_name'], 'director' => $video['director'], 'year' => $video['year'], 'hd' => 0])->total_rows();
        }
        return true;
    }
    public function deleteVideoTask($params)
    {
        return $this->mysqlInstance->delete('video_on_tasks', $params)->total_rows();
    }
    public function addVideoTask($data)
    {
        return $this->mysqlInstance->insert('video_on_tasks', $data)->insert_id();
    }
    public function updateVideoTask($data, $params)
    {
        return $this->mysqlInstance->update('video_on_tasks', $data, $params)->total_rows();
    }
    public function getVideoTaskByVideoId($video_id)
    {
        return $this->mysqlInstance->from('video_on_tasks')->where(['video_id' => $video_id])->get()->first();
    }
    public function setModeratorTask($data)
    {
        return $this->mysqlInstance->insert('moderator_tasks', ['to_usr' => $data['to_usr'], 'media_type' => 2, 'media_id' => $data['id'], 'start_time' => 'NOW()'])->insert_id();
    }
    public function getModeratorTasksById($task_id)
    {
        return $this->mysqlInstance->select('moderator_tasks')->where(['id' => $task_id])->orderby(['id' => 'desc'])->get()->first();
    }
    public function setModeratorHistory($data)
    {
        return $this->mysqlInstance->insert('moderators_history', ['task_id' => $data['task_id'], 'from_usr' => $data['uid'], 'to_usr' => $data['to_usr'], 'comment' => $data['comment'], 'send_time' => 'NOW()'])->insert_id();
    }
    public function getAllAdmins()
    {
        return $this->mysqlInstance->from('administrators')->get()->all();
    }
    public function getTotalRowsModerators($where = array(), $like = array())
    {
        $params = ['where' => $where, 'like' => [], 'order' => []];
        if (!empty($like)) {
            $params['like'] = $like;
        }
        return $this->getModerators($params, true);
    }
    public function getModerators($param, $counter = false)
    {
        if (!empty($param['select'])) {
            $this->mysqlInstance->select($param['select']);
        }
        $this->mysqlInstance->from('moderators');
        if (!empty($param['where'])) {
            $this->mysqlInstance->where($param['where']);
        }
        if (!empty($param['like'])) {
            $this->mysqlInstance->like($param['like'], 'OR');
        }
        if (!empty($param['order'])) {
            $this->mysqlInstance->orderby($param['order']);
        }
        if (!empty($param['limit']['limit'])) {
            $this->mysqlInstance->limit($param['limit']['limit'], $param['limit']['offset']);
        }
        if ($counter) {
            return $this->mysqlInstance->count()->get()->counter();
        }
        if (!empty($param['where']) && !empty($param['where']['id'])) {
            return $this->mysqlInstance->get()->first();
        }
        return $this->mysqlInstance->get()->all();
    }
    public function deleteModeratorsById($id)
    {
        return $this->mysqlInstance->delete('moderators', ['id' => $id])->total_rows();
    }
    public function updateModeratorsById($id, $data)
    {
        return $this->mysqlInstance->update('moderators', $data, ['id' => $id])->total_rows();
    }
    public function insertModerators($data)
    {
        return $this->mysqlInstance->insert('moderators', $data)->insert_id();
    }
    public function checkModMac($params)
    {
        if (!\is_array($params)) {
            $params = ['mac' => $params];
        }
        return $this->mysqlInstance->count()->from('moderators')->where($params)->get()->counter();
    }
    public function getAllModeratorTasks($moderator_id = false)
    {
        $add_where = $moderator_id !== false ? " WHERE moderator_tasks.to_usr = {$moderator_id}" : '';
        return $this->mysqlInstance->query("select moderator_tasks.*, unix_timestamp(end_time) as `end_time`\n                                            from moderator_tasks\n                                            {$add_where}\n                                            order by id")->all();
    }
    public function getTotalRowsAllVideoTasks($where = array(), $like = array())
    {
        $params = ['where' => $where];
        if (!empty($like)) {
            $params['like'] = $like;
        }
        return $this->getAllVideoTasks($params, true);
    }
    public function getAllVideoTasks($param, $counter = false)
    {
        if (!empty($param['select'])) {
            $this->mysqlInstance->select($param['select']);
        }
        $this->mysqlInstance->from('video_on_tasks')->join('video', 'video.id', 'video_on_tasks.video_id', 'INNER');
        if (!empty($param['where'])) {
            $this->mysqlInstance->where($param['where']);
        }
        if (!empty($where)) {
            $this->mysqlInstance->where($where);
        }
        if (!empty($param['like'])) {
            $this->mysqlInstance->like($param['like'], ' OR ');
        }
        if (!empty($param['order'])) {
            $this->mysqlInstance->orderby($param['order']);
        } else {
            $this->mysqlInstance->orderby('date_on');
        }
        if (!empty($param['limit']['limit'])) {
            $this->mysqlInstance->limit($param['limit']['limit'], $param['limit']['offset']);
        }
        return $counter ? $this->mysqlInstance->count()->get()->counter() : $this->mysqlInstance->get()->all();
    }
    public function getVideoGenres()
    {
        return $this->mysqlInstance->from('genre')->orderby('title')->get()->all();
    }
    public function getCategoriesGenres($param = array())
    {
        if (!empty($param['select'])) {
            $this->mysqlInstance->select($param['select']);
        }
        $this->mysqlInstance->from('media_category');
        if (!empty($param['where'])) {
            $this->mysqlInstance->where($param['where']);
        }
        if (!empty($param['like'])) {
            $this->mysqlInstance->like($param['like'], 'OR');
        }
        if (!empty($param['order'])) {
            $this->mysqlInstance->orderby($param['order']);
        } else {
            $this->mysqlInstance->orderby('id');
        }
        if (!empty($param['limit']['limit'])) {
            $this->mysqlInstance->limit($param['limit']['limit'], \array_key_exists('offset', $param['limit']) ? $param['limit']['offset'] : false);
        }
        return $this->mysqlInstance->get()->all();
    }
    public function getTotalRowsCategoriesGenresList($where = array(), $like = array())
    {
        $this->mysqlInstance->count()->from('media_category')->where($where);
        if (!empty($like)) {
            $this->mysqlInstance->like($like, 'OR');
        }
        return $this->mysqlInstance->get()->counter();
    }
    public function insertCategoriesGenres($param)
    {
        return $this->mysqlInstance->insert('media_category', $param)->insert_id();
    }
    public function updateCategoriesGenres($data, $param)
    {
        unset($data['id']);
        return $this->mysqlInstance->update('media_category', $data, $param)->total_rows();
    }
    public function deleteCategoriesGenres($param)
    {
        return $this->mysqlInstance->delete('media_category', $param)->total_rows();
    }
    public function getVideoCategories()
    {
        return $this->mysqlInstance->from('cat_genre')->orderby('category_alias, id')->get()->all();
    }
    public function getVideoCatGenres($param)
    {
        if (!empty($param['select'])) {
            $this->mysqlInstance->select($param['select']);
        }
        $this->mysqlInstance->from('cat_genre')->join('media_category', 'cat_genre.category_alias', 'media_category.category_alias', 'LEFT');
        if (!empty($param['where'])) {
            $this->mysqlInstance->where($param['where']);
        }
        if (!empty($param['like'])) {
            $this->mysqlInstance->like($param['like'], 'OR');
        }
        if (!empty($param['having'])) {
            $this->mysqlInstance->having($param['having']);
        }
        if (!empty($param['order'])) {
            $this->mysqlInstance->orderby($param['order']);
        } else {
            $this->mysqlInstance->orderby('cat_genre.id');
        }
        if (!empty($param['limit']['limit'])) {
            $this->mysqlInstance->limit($param['limit']['limit'], \array_key_exists('offset', $param['limit']) ? $param['limit']['offset'] : false);
        }
        return $this->mysqlInstance->get()->all();
    }
    public function getTotalRowsVideoCatGenresList($where = array(), $like = array())
    {
        $this->mysqlInstance->count()->from('cat_genre')->join('media_category', 'cat_genre.category_alias', 'media_category.category_alias', 'LEFT')->where($where);
        if (!empty($like)) {
            $this->mysqlInstance->like($like, 'OR');
        }
        return $this->mysqlInstance->get()->counter();
    }
    public function insertVideoCatGenres($data = array())
    {
        return $this->mysqlInstance->insert('cat_genre', $data['data'])->total_rows();
    }
    public function updateVideoCatGenres($data = array())
    {
        return $this->mysqlInstance->update('cat_genre', $data['data'], $data['where'])->total_rows();
    }
    public function deleteVideoCatGenres($param)
    {
        return $this->mysqlInstance->delete('cat_genre', $param)->total_rows();
    }
    public function checkName($params)
    {
        $where['name'] = $params['name'];
        if (\array_key_exists('year', $params) && !empty($params['year'])) {
            $where['year'] = $params['year'];
        }
        if (\array_key_exists('id<>', $params) && !empty($params['id<>'])) {
            $where['id<>'] = $params['id<>'];
        }
        return $this->mysqlInstance->count()->from('video')->where($where)->get()->counter();
    }
    public function saveScreenshotData($data)
    {
        return $this->mysqlInstance->insert('screenshots', ['name' => $data['name'], 'size' => $data['size'], 'type' => $data['type']])->insert_id();
    }
    public function removeScreenshotData($id)
    {
        return $this->mysqlInstance->delete('screenshots', ['id' => $id])->total_rows();
    }
    public function cleanScreenshotData()
    {
        return $this->mysqlInstance->delete('screenshots', ['media_id' => 0])->total_rows();
    }
    public function updateScreenshotData($params, $where)
    {
        if (!\is_array($params)) {
            $params = ['media_id' => $params];
        }
        if (!\is_array($where)) {
            $where = ['id' => $where];
        }
        return $this->mysqlInstance->update('screenshots', $params, $where)->total_rows();
    }
    public function getScreenshotData($params)
    {
        $this->mysqlInstance->from('screenshots')->orderby(['id' => 'desc']);
        return !\is_array($params) ? $this->mysqlInstance->where(['media_id' => $params])->get()->first('id') : $this->mysqlInstance->where($params)->get()->all();
    }
    public function insertVideo($data)
    {
        return $this->mysqlInstance->insert('video', $data)->insert_id();
    }
    public function updateVideo($data, $id)
    {
        return $this->mysqlInstance->update('video', $data, ['id' => $id])->total_rows();
    }
    public function getVideoByParam($param)
    {
        return $this->mysqlInstance->from('video')->where($param)->get()->first();
    }
    public function mowingCategoriesRows($curr_id, $curr_pos, $target_pos, $direction)
    {
        if ($direction == 'back') {
            $field_update = 'num = num + 1';
            $where = " num >= {$target_pos} and num < {$curr_pos} ";
        } else {
            $field_update = ' num = num - 1 ';
            $where = " num > {$curr_pos} and num <= {$target_pos} ";
        }
        if ($this->mysqlInstance->query("UPDATE `media_category` SET {$field_update} WHERE {$where} ")->total_rows() && $this->updateCategoriesGenres(['num' => $target_pos], ['id' => $curr_id])) {
            return true;
        }
        return false;
    }
    public function getAdsTotalRows($where = array(), $like = array())
    {
        $params = ['where' => $where, 'like' => $like];
        return $this->getAdsList($params, true);
    }
    public function getAdsList($param, $counter = false)
    {
        $date = new \DateTime();
        $date->modify('1 month ago');
        if (!empty($param['select'])) {
            $this->mysqlInstance->select($param['select']);
        }
        $this->mysqlInstance->from('vclub_ad as V_A')->join('vclub_ads_log as V_A_L', 'V_A.id', 'V_A_L.vclub_ad_id AND UNIX_TIMESTAMP(V_A_L.added)>' . $date->getTimestamp(), 'LEFT');
        if (!empty($param['where'])) {
            $this->mysqlInstance->where($param['where']);
        }
        if (!empty($param['like'])) {
            $this->mysqlInstance->like($param['like'], 'OR');
        }
        if (!empty($param['order'])) {
            $this->mysqlInstance->orderby($param['order']);
        }
        $this->mysqlInstance->groupby('V_A.id');
        if (!empty($param['limit']['limit'])) {
            $this->mysqlInstance->limit($param['limit']['limit'], $param['limit']['offset']);
        }
        if ($counter) {
            $count = $this->mysqlInstance->count()->get()->all('count(*)');
            return !empty($count) ? \array_sum($count) : 0;
        }
        return $this->mysqlInstance->get()->all();
    }
}
