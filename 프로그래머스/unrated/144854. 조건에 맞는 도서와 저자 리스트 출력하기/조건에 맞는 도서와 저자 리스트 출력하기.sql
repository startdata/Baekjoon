-- 코드를 입력하세요
SELECT A.BOOK_ID, B.AUTHOR_NAME, DATE_FORMAT(A.PUBLISHED_DATE,'%Y-%m-%d')
from BOOK as A
inner join AUTHOR as B
on A.AUTHOR_ID = B.AUTHOR_ID
where A.CATEGORY = '경제'
order by A.PUBLISHED_DATE
