<?php 
	//模拟后台查找出来的数据
	$list = array(
		array('id'=>1, 'pid'=>2, 'text'=>'血汗泪'),
		array('id'=>2, 'pid'=>2, 'text'=>'迁徙'),
		array('id'=>3, 'pid'=>2, 'text'=>'追风筝的人'),
		array('id'=>4, 'pid'=>3, 'text'=>'slow hands'),
		array('id'=>5, 'pid'=>3, 'text'=>'See You Again'),
		array('id'=>6, 'pid'=>2, 'text'=>'告别之后'),
		array('id'=>7, 'pid'=>1, 'text'=>'潇洒走一回'),
		array('id'=>8, 'pid'=>2, 'text'=>'一个忧伤着的求救'),
		array('id'=>9, 'pid'=>3, 'text'=>'Let It Go'),
		array('id'=>10, 'pid'=>1, 'text'=>'红颜'),
		array('id'=>11, 'pid'=>3, 'text'=>'Earn it'),
		array('id'=>12, 'pid'=>2, 'text'=>'思美人'),
		array('id'=>13, 'pid'=>1, 'text'=>'郭源潮'),
		array('id'=>14, 'pid'=>2, 'text'=>'弟兄'),
		array('id'=>15, 'pid'=>4, 'text'=>'고속도로 로맨스'),
		array('id'=>16, 'pid'=>1, 'text'=>'不期而遇'),
		array('id'=>17, 'pid'=>3, 'text'=>'Love Me Like You Do'),
		array('id'=>18, 'pid'=>2, 'text'=>'由个人'),
		array('id'=>19, 'pid'=>1, 'text'=>'少读红楼'),
		array('id'=>20, 'pid'=>2, 'text'=>'远走高飞'),
		array('id'=>21, 'pid'=>1, 'text'=>'空帆船'),
		array('id'=>22, 'pid'=>2, 'text'=>'清白之年'),
		array('id'=>23, 'pid'=>3, 'text'=>'Just Like Fire'),
		array('id'=>24, 'pid'=>4, 'text'=>'涙の物语'),
		array('id'=>25, 'pid'=>4, 'text'=>'江南Style'),
		array('id'=>26, 'pid'=>4, 'text'=>'ガラガラ'),
		array('id'=>27, 'pid'=>1, 'text'=>'半句再见'),
		array('id'=>28, 'pid'=>4, 'text'=>'天空之城'),
		array('id'=>29, 'pid'=>4, 'text'=>'사랑이었다'),
		array('id'=>30, 'pid'=>3, 'text'=>' You are so beautiful'),
		array('id'=>31, 'pid'=>1, 'text'=>'我害怕'),
		array('id'=>32, 'pid'=>4, 'text'=>'さよならの夏 ～コクリコ坂から～'),
		array('id'=>33, 'pid'=>3, 'text'=>' Heart And Soul'),
		array('id'=>34, 'pid'=>4, 'text'=>'넘버나인 '),
		array('id'=>35, 'pid'=>1, 'text'=>'一半一半'),
		array('id'=>36, 'pid'=>3, 'text'=>'Bang Bang'),
		array('id'=>37, 'pid'=>4, 'text'=>'君が好きだと叫びたい'),
		array('id'=>38, 'pid'=>3, 'text'=>'Same Old Love'),
		array('id'=>39, 'pid'=>4, 'text'=>'君をのせて'),
		array('id'=>40, 'pid'=>1, 'text'=>'恋恋风尘')
	);
	//返回所有数据，无用数据太多，同时也增加了浏览器的负担
	// echo json_encode($list);
	$id=$_GET['id'];
	$a=array();
	$num=count($list);
	for($i=0;$i<$num;$i++){
		if($id==$list[$i]['pid'])
			$a[]=$list[$i];
	}
	echo json_encode($a);
?>
