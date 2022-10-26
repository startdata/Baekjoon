# -- 코드를 입력하세요
# SELECT count(*)
# from user_info
# where AGE between 20 and 29 AND date_format(JOINED, '21')

SELECT Count(*) AS USERS FROM USER_INFO WHERE AGE BETWEEN 20 AND 29 AND YEAR(JOINED) = 2021