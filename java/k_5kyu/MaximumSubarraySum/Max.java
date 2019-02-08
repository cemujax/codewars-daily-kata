package k_5kyu.MaximumSubarraySum;

public class Max {

    public static int sequence(int[] arr) {

        int max = 0, sum = 0;

        for(int n : arr) {
            sum += n;
            max = Math.max(max, sum);
            sum = Math.max(sum, 0);
        }

        return max;
    }
}