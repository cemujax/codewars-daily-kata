package k_6kyu.FindTheOddInt;

public class FindOdd {

    public static int findIt(int[] a) {

        int odd = 0;
        for(int n : a) {
            odd ^= n;
        }

        return odd;
    }
}
