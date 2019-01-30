package k_7kyu.TwoToOne;

public class TwoToOne {

    public static String longest(String s1, String s2) {

        String str = s1 + s2;
        StringBuilder sb = new StringBuilder();

        str.chars() // IntStream
                .distinct()
                .sorted()
                .forEach(s -> sb.append((char) s));

        return sb.toString();
    }
}
