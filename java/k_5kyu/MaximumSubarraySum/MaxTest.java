package k_5kyu.MaximumSubarraySum;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MaxTest {

    @Test
    public void testEmptyArray() throws Exception {
        assertEquals("Empty arrays should have a max of 0", 0, Max.sequence(new int[]{}));
    }
    @Test
    public void testNegativeArray() throws Exception {
        assertEquals("Example array should have a max of 6", 0, Max.sequence(new int[]{-2, -3, -5}));
    }
    @Test
    public void testPositiveArray() throws Exception {
        assertEquals("Example array should have a max of 6", 9, Max.sequence(new int[]{1,3,5,0}));
    }
    @Test
    public void testExampleArray2() throws Exception {
        assertEquals("Example array should have a max of 6", 9, Max.sequence(new int[]{-2, 1, -3, 4, 5}));
    }
    @Test
    public void testExampleArray() throws Exception {
        assertEquals("Example array should have a max of 6", 6, Max.sequence(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4}));
    }
}