-- 코드를 입력하세요
SELECT B.ANIMAL_ID, B.ANIMAL_TYPE, B.NAME
from ANIMAL_INS AS A
inner join ANIMAL_OUTS AS B
on A.ANIMAL_ID = B.ANIMAL_ID
where A.SEX_UPON_INTAKE != B.SEX_UPON_OUTCOME