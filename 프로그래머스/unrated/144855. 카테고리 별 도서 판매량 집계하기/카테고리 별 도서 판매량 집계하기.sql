SELECT b.category, SUM(bs.sales)
FROM book b, book_sales bs
WHERE b.book_id = bs.book_id AND Month(sales_date) = 01 AND Year(sales_date) = 2022
GROUP BY b.category
ORDER BY b.category;
