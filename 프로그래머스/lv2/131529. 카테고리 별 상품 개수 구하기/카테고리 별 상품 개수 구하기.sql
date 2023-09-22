SELECT
    LEFT(PRODUCT_CODE, 2) AS CATEGORY_CODE,
    COUNT(*) AS PRODUCT_COUNT
FROM PRODUCT
GROUP BY CATEGORY_CODE
ORDER BY CATEGORY_CODE;