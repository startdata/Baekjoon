SELECT
    history_id,
    TRUNCATE((daily_fee * day) * (1 - (discount_rate / 100)),0) fee
FROM (
    SELECT
        history_id,
        day,
        daily_fee,
        IFNULL((SELECT discount_rate  FROM CAR_RENTAL_COMPANY_DISCOUNT_PLAN 
            WHERE CAR_TYPE = '트럭'
            AND DURATION_TYPE = 
                (CASE WHEN day >= 90 THEN '90일 이상'
                      WHEN day >= 30 THEN '30일 이상'
                      WHEN day >= 7  THEN '7일 이상'
                      ELSE '' END)    
        ),0) discount_rate
    FROM (
    SELECT
        history_id,
        DATEDIFF(END_DATE,START_DATE)+1 day,
        daily_fee
      FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY a
      JOIN (
          SELECT
                CAR_ID,
                CAR_TYPE,
                DAILY_FEE
            FROM CAR_RENTAL_COMPANY_CAR
            WHERE CAR_TYPE = '트럭'
      ) b ON a.CAR_ID = b.CAR_ID
    )T
)TT
ORDER BY fee DESC, history_id DESC