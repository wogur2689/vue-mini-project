<script setup>
</script>

<template>
    <div align="center" id="contents-Timetable">
        <table border="1">
            <caption id="2a2a"><strong>
                    <h2>나의 학교 시간표.</h2>
                </strong></caption>
            <tr>
                <th></th>
                <td style="Color:red;">월</td>
                <td style="Color:orange;">화</td>
                <td style="Color:yellow;">수</td>
                <td style="Color:green;">목</td>
                <td style="Color:blue;">금</td>
            </tr>
            <tr>
                <th>9:00~10:00</th>
                <td style="Color:red;"></td>
                <td style="Color:orange;"></td>
                <td style="Color:yellow;" rowspan="10">
                    <h3>공강이요.</h3>
                </td>
                <td style="Color:green;" rowspan="4">C언어<br>애플리케이션</td>
                <td style="Color:blue;"></td>
            </tr>
            <tr>
                <th>10:00~11:00</th>
                <td style="Color:red;"></td>
                <td style="Color:orange;"></td>
                <td style="Color:blue;" rowspan="3">웹서버<br>프로그래밍</td>
            </tr>
            <tr>
                <th>11:00~12:00</th>
                <td style="Color:red;"></td>
                <td style="Color:orange;" rowspan="2">백세시대의<br>부자학</td>
            </tr>
            <tr>
                <th>12:00~13:00</th>
                <td style="Color:red;"></td>
            </tr>
            <tr>
                <th>13:00~14:00</th>
                <td style="Color:red;"></td>
                <td style="Color:orange;" rowspan="4">지능형<br>시스템설계<br>(종합설계)</td>
                <td style="Color:green;"></td>
                <td style="Color:blue;"></td>
            </tr>
            <tr>
                <th>14:00~15:00</th>
                <td style="Color:red;" rowspan="3">지능형<br>소프트웨어<br>프로그래밍</td>
                <td style="Color:green;"></td>
                <td style="Color:blue;" rowspan="3">스마트앱<br>프로젝트</td>
            </tr>
            <tr>
                <th>15:00~16:00</th>
                <td style="Color:green;"></td>
            </tr>
            <tr>
                <th>16:00~17:00</th>
                <td style="Color:green;"></td>
            </tr>
            <tr>
                <th>17:00~18:00</th>
                <td style="Color:red;"></td>
                <td style="Color:orange;">진로지도</td>
                <td style="Color:green;"></td>
                <td style="Color:blue;"></td>
            </tr>
            <tr>
                <th>18:00~19:00</th>
                <td style="Color:red;"></td>
                <td style="Color:orange;"></td>
                <td style="Color:green;"></td>
                <td style="Color:blue;"></td>
            </tr>
        </table>
    </div> <!--end of contents-Timetable-->
</template>
<style scoped>
#contents-Timetable {
    clear: both;
    width: 780px;
    height: 375px;
    padding-bottom: 25px;
    margin-bottom: 10px;
    float: left;
}
</style>