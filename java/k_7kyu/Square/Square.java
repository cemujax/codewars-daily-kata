package k_7kyu.Square;

public class Square {

    public static boolean isSquare(int n) {
        if (n < 0) return false;

        return Math.sqrt(n)%1 == 0;
    }
}
