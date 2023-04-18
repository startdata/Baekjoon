SELECT m.member_name, r.review_text, DATE_FORMAT(r.review_date, "%Y-%m-%d")
FROM member_profile AS m 
    LEFT JOIN rest_review AS r ON m.member_id = r.member_id
WHERE r.member_id IN (   
                        SELECT id_review_rank.id
                        FROM (  # id - 리뷰수 - 순위
                                SELECT sub.id AS id, sub.review_count AS review_count
                                    , RANK() OVER (ORDER BY sub.review_count DESC) AS 'rank'
                                FROM (  # id - top 리뷰 수
                                        SELECT member_id AS id, COUNT(*) AS review_count
                                        FROM rest_review
                                        GROUP BY member_id
                                    ) sub
                            ) id_review_rank
                        WHERE id_review_rank.rank = 1
                    )
ORDER BY r.review_date, r.review_text