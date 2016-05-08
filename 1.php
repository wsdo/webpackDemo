​<?php
class Tool_Msg{

static function sendPhone($phone, $content) {
        $ak = 'tvxMPSnWIejN9HL8yDbRGgsG';
$key = '61d44888b850089be8918997aed9fd80';
        $provider = 'jsapi';
        $ralService = 'sms';
        $params = "http://api.map.baidu.com/sms?method=send&provider=jsapi&content=$content&phone=$phone&ak=$ak";
        $sig = md5($params.$key);
        $url = $params . "&sig=$sig";

$ch = curl_init();
$header = array(
"content-type: application/x-www-form-urlencoded; charset=UTF-8"
);
curl_setopt($ch,CURLOPT_HTTPHEADER,$header);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, 1); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
curl_setopt($ch, CURLOPT_VERBOSE, true);
$result = curl_exec($ch);
if($result)
echo $result;
curl_close($ch);
}
}

$content = 'hello word';
$phone = '18252031854';
Tool_Msg::sendPhone($phone, $content);