// JavaScript Bitwise Operations

// Operator	    Name	                Description

// &	        AND	                    Sets each bit to 1 if both bits are 1
// |	        OR	                    Sets each bit to 1 if one of two bits is 1
// ^	        XOR	                    Sets each bit to 1 if only one of two bits is 1
// ~	        NOT	                    Inverts all the bits
// <<	        Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
// >>	        Signed right shift	    Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>	        Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off


// Operation	Result	Same as	    Result

// 5 & 1	      1	    0101 & 0001	 0001
// 5 | 1	      5	    0101 | 0001	 0101
// ~ 5	          10    	~0101	 1010
// 5 << 1	      10    0101 << 1	 1010
// 5 ^ 1	      4	    0101 ^ 0001	 0100
// 5 >> 1	      2	    0101 >> 1	 0010
// 5 >>> 1	      2	    0101 >>> 1	 0010


// JavaScript Bitwise AND

// Operation	Result
// 0 & 0	    0
// 0 & 1	    0
// 1 & 0	    0
// 1 & 1	    1


// Decimal	Binary
// 5	    00000000000000000000000000000101
// 1	    00000000000000000000000000000001
// 5 & 1	00000000000000000000000000000001 (1)
console.log(5 & 1)

// JavaScript Bitwise OR

// Operation	Result
// 0 | 0	    0
// 0 | 1	    1 
// 1 | 0	    1
// 1 | 1	    1
console.log(5 | 1)

// JavaScript Bitwise XOR

// Operation	Result
// 0 ^ 0	    0
// 0 ^ 1	    1
// 1 ^ 0	    1
// 1 ^ 1	    0
console.log(5 ^ 1)

console.log(~5)

// JavaScript (Zero Fill) Bitwise Left Shift (<<)
// Decimal	Binary
// 5	    00000000000000000000000000000101
// 5 << 1	00000000000000000000000000001010 (10)
console.log(5 << 1)

// JavaScript (Sign Preserving) Bitwise Right Shift (>>)
// Decimal	Binary
// -5	    11111111111111111111111111111011
// -5 >> 1	11111111111111111111111111111101 (-3)
console.log(-5 >> 1)

// JavaScript (Zero Fill) Right Shift (>>>)
// Decimal	Binary
// 5	    00000000000000000000000000000101
// 5 >>> 1	00000000000000000000000000000010 (2)
console.log(5 >>> 1)


// Converting Decimal to Binary
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
console.log(dec2bin(-5))


// Converting Binary to Decimal
function bin2dec(bin){
    return parseInt(bin, 2).toString(10);
}
console.log(bin2dec(101))
