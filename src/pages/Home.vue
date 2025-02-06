<script setup>
import Timer from '@/components/Timer.vue';
import TimeTable from '@/components/TimeTable.vue';


</script>

<template>
	<div id="header">
		<h1 class="header_text">sweet my home.</h1>
		<h4 class="header_text">안녕하세요!</h4>
	</div>
		<div id="contents" align="center">
			<!-- <img src="images/covid-19.jpg" width="780" height="100"><br> -->
			<form method=get action="https://www.google.com/search" target="_blank" accept-charset="utf-8" onsubmit="emulAcceptCharset(this)">
			<b>Google 검색 :</b> <input type=text name=q size=20 maxlength=50 placeholder="Google search" style="text-align:center; font-size:15px;">
			<button type="submit" style="width:80px; height:25px; background:#4d90fe; color:#ffffff; font-size:14px;">검 색</button>
			</form>
		</div>
		<div id="sidebar-loginbox">
		<!-- <?php 
			session_start();
			if(isset($_SESSION["userid"])) 
				$userid = $_SESSION["userid"];
			else 
				$userid = " ";
			$logged ="".$userid."님 환영합니다.";
			if($userid != " ") {
		?>
						<p>
							<?=$logged?>
						</p>
						<div class="login_tema_after">
							<a href="board_list.php">게시판</a>
						</div>
						<div class="login_tema_after">
						<a href="mypage.php">내정보</a>
						</div>
						<div class="login_tema_after">
						<a href="logout.php">로그아웃</a>
						</div>
		<?php
			} else { 
		?>
					<div class="login_tema_before">
						<a href="login.html">로그인</a>
					</div>
					<div class="login_tema_before">
						<a href="membership_form.html"> 회원가입</a>
					</div>
		<?php
			}
		?> -->
		</div>
		
		<div id="contents-gugudan" align="center">
			<h5>구구단</h5>
			<table border='1' width='1000px'>
			<tr bgcolor='#ccccc' align='center'>
				<td>2단</td>
				<td>3단</td>
				<td>4단</td>
				<td>5단</td>
				<td>6단</td>
				<td>7단</td>
				<td>8단</td>
				<td>9단</td>
			</tr>

			</table>
		</div>  <!--end of gugudan--> 

</template>

<style scoped>

</style>