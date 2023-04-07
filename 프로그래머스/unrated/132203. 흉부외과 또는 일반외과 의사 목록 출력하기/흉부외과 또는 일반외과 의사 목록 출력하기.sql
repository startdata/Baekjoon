-- 코드를 입력하세요
SELECT DR_NAME,DR_ID,MCDP_CD,DATE_FORMAT(hire_ymd, '%Y-%m-%d') as hire_ymd
from DOCTOR
where MCDP_CD = 'CS' OR MCDP_CD = 'GS'
order by HIRE_YMD DESC , DR_NAME ASC

# SELECT dr_name, dr_id, mcdp_cd, DATE_FORMAT(hire_ymd, '%Y-%m-%d') as hire_ymd
# from doctor
# where mcdp_cd in ('cs', 'gs')
# order by hire_ymd desc, dr_name