-- 코드를 입력하세요
# SELECT MEMBER_ID, MEMBER_NAME, GENDER, date_format(DATE_OF_BIRTH, '%Y-%m-%d') as DATE_OF_BIRTH
# from MEMBER_PROFILE
# where date_format(DATE_OF_BIRTH, '%m') = 03 AND TLNO is not null AND gender = 'W'
# order by MEMBER_ID DESC

SELECT member_id, member_name, gender, date_format(date_of_birth, "%Y-%m-%d") as date_for_birth
from member_profile
where gender = 'W' and tlno is not null and date_format(date_of_birth, "%m") = "03";