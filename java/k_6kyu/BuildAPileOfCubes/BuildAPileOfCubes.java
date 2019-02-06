package k_6kyu.BuildAPileOfCubes;

public class BuildAPileOfCubes {

   public static long findNb(long m) {

       long sum = 0, n = 1;

       while(sum < m) {
           sum += (long)Math.pow(n, 3);
           n++;
       }
        return sum == m ? (n-1) : -1;
    }
}
