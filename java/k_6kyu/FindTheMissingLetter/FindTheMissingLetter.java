package k_6kyu.FindTheMissingLetter;

public class FindTheMissingLetter {

    public static char findMissingLetter(char[] array) {

        char start = array[0];
        for(char ch : array){
            if(start != ch) break;
            start++;
        }
        return start;
    }
}
