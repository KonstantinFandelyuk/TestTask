$arr = array(
	array(1,	0,		'text_1'),
	array(4,	2,		'text_4'),
	array(8,	0,		'text_8'),
	array(3,	1,		'text_3'),
	array(10,	3,		'text_10'),
	array(5,	4,		'text_5'),
	array(7,	3,		'text_7'),
	array(2,	1,		'text_2'),
	array(9,	0,		'text_9'),
	array(11,	0,		'text_11'),
	array(6,	4,		'text_6'),
	array(12,	11,		'text_12')
);

$arrsort;
$arrfinal;

foreach ($arr as $val) {
    $arrsort[] = $val[2];
}

asort($arrsort, SORT_NATURAL);

foreach($arrsort as $key=>$val) {
    echo $arr[$key][0].'/'.$arr[$key][1].'/'.$arr[$key][2].'///'; 
		echo "<div>".$arr[$key][2]."</div>";
}
?>
