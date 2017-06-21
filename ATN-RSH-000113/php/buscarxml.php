<?php
$validDirs['dirs'] = array();

if (isset($_POST['rfc']) && !empty($_POST['rfc'])) {
  $RFC = $_POST['rfc'];

  if (preg_match('/([a-z]\w{3})([0-9]\d{5})/i', $RFC)) {
    $dir = new DirectoryIterator(dirname(__FILE__) . '\..\xml');
    // header('Content-type: text/plain');  // LEE TODO EN TEXTO PLANO // pero no importa :P

    foreach ($dir as $fileinfo) {
      if (!$fileinfo -> isDot()) {
        $contents = file_get_contents(dirname(__FILE__) . '\..\xml\\' . ($fileinfo -> getFileName()));
        // echo $contents . '<br><br>';
        if (preg_match('/' . $RFC . '/i', $contents)) {
          // echo $fileinfo -> getFileName();
          array_push($validDirs['dirs'], $fileinfo -> getFileName());
        }
      }
    }
  }
}

$JSON = json_encode($validDirs);

header('Content-type: application/json');
echo $JSON;
