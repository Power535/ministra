<?php

namespace Ministra\Lib;

class KaraokeMaster extends \Ministra\Lib\Master
{
    public function __construct()
    {
        $this->media_type = 'karaoke';
        $this->db_table = 'karaoke';
        parent::__construct();
    }
    protected function getMediaName()
    {
        return $this->media_id . '.mpg';
    }
    protected function setStatus($status)
    {
        $this->db->update('karaoke', ['status' => $status], ['id' => $this->media_id]);
    }
}
