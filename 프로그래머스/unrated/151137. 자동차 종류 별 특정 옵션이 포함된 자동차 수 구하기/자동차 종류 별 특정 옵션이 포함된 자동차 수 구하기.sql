SELECT car_type, COUNT(*)
FROM CAR_RENTAL_COMPANY_CAR
WHERE options REGEXP '통풍시트|열선시트|가죽시트'
GROUP BY car_type
ORDER BY car_type;