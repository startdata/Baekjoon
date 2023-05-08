import java.util.*;
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String answer = "";

        for(Character c : a.toCharArray()){
            if(Character.isUpperCase(c)){
                answer += Character.toLowerCase(c);
            }
            else if(Character.isLowerCase(c)){
                answer += Character.toUpperCase(c);
            }
        } 
        System.out.println(answer);
    }
}