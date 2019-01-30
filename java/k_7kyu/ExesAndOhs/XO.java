package k_7kyu.ExesAndOhs;

public class XO {

    public static boolean getXO (String str) {

        str = str.toLowerCase();
        long x = str.chars().filter(ch -> (char) ch == 'x').count();
        long o = str.chars().filter(ch -> (char) ch == 'o').count();

        return x == o;
    }
}
