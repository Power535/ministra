<?php

\session_start();
\ob_start();
require __DIR__ . '/common.php';
use Ministra\Lib\Admin;
use Ministra\Lib\AdminAccess;
use Ministra\Lib\S642b6461e59cef199375bfb377c17a39\L18e6d54d6202a6e70c8e428830aa4c89;
$error = '';
\Ministra\Lib\Admin::checkAuth();
\Ministra\Lib\Admin::checkAccess(\Ministra\Lib\AdminAccess::ACCESS_VIEW);
if (@$_GET['del'] && !empty($_GET['id'])) {
    \Ministra\Lib\Admin::checkAccess(\Ministra\Lib\AdminAccess::ACCESS_DELETE);
    \Ministra\Lib\S642b6461e59cef199375bfb377c17a39\L18e6d54d6202a6e70c8e428830aa4c89::getInstance()->delete('audio_years', ['id' => (int) $_GET['id']]);
    \header('Location: audio_year.php');
    exit;
}
if (!empty($_POST)) {
    if (empty($_POST['name'])) {
        $error = \_('Error: all fields are required') . ' <a href="#form">#</a>';
    } elseif (isset($_POST['save'])) {
        \Ministra\Lib\Admin::checkAccess(\Ministra\Lib\AdminAccess::ACCESS_CREATE);
        $year_id = \Ministra\Lib\S642b6461e59cef199375bfb377c17a39\L18e6d54d6202a6e70c8e428830aa4c89::getInstance()->insert('audio_years', ['name' => $_POST['name'], 'modified' => 'NOW()'])->insert_id();
        \header('Location: audio_year.php');
        exit;
    } elseif (isset($_POST['update'])) {
        \Ministra\Lib\Admin::checkAccess(\Ministra\Lib\AdminAccess::ACCESS_EDIT);
        $year_id = (int) $_GET['id'];
        \Ministra\Lib\S642b6461e59cef199375bfb377c17a39\L18e6d54d6202a6e70c8e428830aa4c89::getInstance()->update('audio_years', ['name' => $_POST['name'], 'modified' => 'NOW()'], ['id' => $year_id]);
        \header('Location: audio_year.php');
        exit;
    }
}
?>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style type="text/css">

        body {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
        }

        td {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
            text-decoration: none;
            color: #000000;
        }

        .list {
            border-width: 1px;
            border-style: solid;
            border-color: #E5E5E5;
        }

        .list2 {
            border-width: 1px;
            border-style: solid;
            border-color: #c5c5c5;
            padding-left: 5px;
        }

        a {
            color: #0000FF;
            font-weight: bold;
            text-decoration: none;
        }

        a:link, a:visited {
            color: #5588FF;
            font-weight: bold;
        }

        a:hover {
            color: #0000FF;
            font-weight: bold;
            text-decoration: underline;
        }

    </style>
    <title>
        <?php 
echo \_('AUDIO YEARS');
?>
    </title>
</head>
<?php 
$MAX_PAGE_ITEMS = 30;
$page = isset($_GET['page']) ? $_GET['page'] : 0;
$page_offset = $page * $MAX_PAGE_ITEMS;
$items = \Ministra\Lib\S642b6461e59cef199375bfb377c17a39\L18e6d54d6202a6e70c8e428830aa4c89::getInstance()->from('audio_years');
$items_count = clone $items;
$total_items = $items_count->nolimit()->count()->get()->counter();
$total_pages = \ceil($total_items / $MAX_PAGE_ITEMS);
$items->limit($MAX_PAGE_ITEMS, $page_offset);
$items = $items->get();
if (isset($_GET['id'])) {
    $current_year = \Ministra\Lib\S642b6461e59cef199375bfb377c17a39\L18e6d54d6202a6e70c8e428830aa4c89::getInstance()->from('audio_years')->where(['id' => (int) $_GET['id']])->get()->first();
}
?>
<body>

<table align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td align="center" valign="middle" width="100%" bgcolor="#88BBFF">
            <font size="5px" color="White"><b>&nbsp;<?php 
echo \_('AUDIO YEARS');
?>&nbsp;</b></font>
        </td>
    </tr>
    <tr>
        <td>
            <a href="audio_album.php"><< <?php 
echo \_('Back');
?></a>
        </td>
    </tr>
    <tr>
        <td align="center">
            <font color="Red">
                <strong>
                    <?php 
echo $error;
?>
                </strong>
            </font>
            <br>
            <br>
        </td>
    </tr>
    <tr>
        <td>
            <table border="0" align="center" width="620" style="display: none">
                <tr>
                    <td>
                        <form action="" method="GET">
                            <input type="text" name="search"
                                   value="<?php 
echo isset($_GET['search']) ? $_GET['search'] : '';
?>"><input
                                    type="submit"
                                    value="<?php 
echo \htmlspecialchars(\_('Search'), \ENT_QUOTES);
?>">&nbsp;
                            <font color="Gray"><?php 
echo \_('search by name');
?></font>
                        </form>
                    <td>
                </tr>
            </table>

            <center>
                <table class='list' cellpadding='3' cellspacing='0'>
                    <tr>
                        <td class='list'><b><?php 
echo \_('Name');
?></b></td>
                        <td class='list'>&nbsp;</td>
                    </tr>
                    <tr>
                        <?php 
while ($item = $items->next()) {
    echo '<tr>';
    echo "<td class='list'>" . $item['name'] . "</td>\n";
    echo "<td class='list' nowrap><a href='?edit=1&id=" . $item['id'] . "#form'>edit" . '</a>&nbsp;&nbsp;';
    echo "<a href='#' onclick='if(confirm(\"" . \htmlspecialchars(\_('Do you really want to delete this record?'), \ENT_QUOTES) . '")){document.location="audio_year.php?del=1&id=' . $item['id'] . '&search=' . @$_GET['search'] . "\"}'>del</a>&nbsp\n";
    echo '</td>';
    echo '</tr>';
}
?>
                    </tr>
                </table>
                <table width='600' align='center' border=0>
                    <tr>
                        <td width='100%' align='center'>
                            <?php 
echo \Ministra\OldAdmin\page_bar($MAX_PAGE_ITEMS, $page, $total_pages);
?>
                        </td>
                    </tr>
                </table>

                <a name="form"></a>
                <table align="center" class='list'>
                    <tr>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <form id="form_" enctype="multipart/form-data" method="POST">
                                <table align="center">
                                    <tr>
                                        <td align="right">
                                            <?php 
echo \_('Year');
?>:
                                        </td>
                                        <td>
                                            <input name="name" type="text"
                                                   value="<?php 
echo !empty($current_year) ? $current_year['name'] : '';
?>">
                                            <input type="hidden" value="<?php 
echo @$_GET['id'];
?>">
                                            <input type="hidden" name="<?php 
echo @$_GET['id'] ? 'update' : 'save';
?>"
                                                   value="1">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        </td>
                                        <td>
                                            <input type="submit"
                                                   value="<?php 
echo \htmlspecialchars(\_('Save'), \ENT_QUOTES);
?>">&nbsp;
                                            <input type="button"
                                                   value="<?php 
echo \htmlspecialchars(\_('New'), \ENT_QUOTES);
?>"
                                                   onclick="document.location='audio_year.php'">
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </td>
                    </tr>
                </table>
            </center>
        </td>
    </tr>
</table>

</body>
</html>

