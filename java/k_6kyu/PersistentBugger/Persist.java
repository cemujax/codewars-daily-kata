package k_6kyu.PersistentBugger;

public class Persist {

    public static int persistence(long n) {

        int count = 0;

        while (n > 9) {
            n = Long.toString(n)
                    .chars()
                    .reduce(1, (a, b) -> a * (b - '0'));
            count++;
        }

        return count;
    }
}
