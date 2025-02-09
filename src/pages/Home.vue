<script setup>
import Timer from '@/components/Timer.vue';
import TimeTable from '@/components/TimeTable.vue';

import { ref } from 'vue';

const danList = ref([2, 3, 4, 5, 6, 7, 8, 9]); // 구구단의 단 리스트
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
                <td v-for="(dan, index) in danList" :key="index">{{ dan }}단</td>
            </tr>
            <tr v-for="i in 9" :key="i">
                <td v-for="dan in danList" :key="dan">{{ dan }} x {{ i }} = {{ dan * i }}</td>
            </tr>
			</table>
		</div>  <!--end of gugudan--> 

</template>

<style scoped>

</style>