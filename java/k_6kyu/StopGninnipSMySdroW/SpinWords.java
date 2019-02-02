package k_6kyu.StopGninnipSMySdroW;

import java.util.stream.Collectors;
import java.util.stream.Stream;

public class SpinWords {

    public String spinWords(String sentence) {

        String result = Stream.of(sentence.split(" "))
                .map(s-> s.length()>=5 ? new StringBuilder(s).reverse().toString() : s)
                .collect(Collectors.joining(" "));
        return result;
    }
}
