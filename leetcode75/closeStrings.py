class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        print(word1, word2)

        # base cases:
        # word1 and word2 are not of length 0 but one is shorter than the other
        # word1 or word2 is of length 0

        if len(word1) == 0 or len(word2) == 0:
            return True
        if (len(word1) != len(word2)) and (len(word1) > 0 and len(word2) > 0):
            return False

        word1_map = {}
        word2_map = {}
        # build maps of both
        for char in word1:
            letter_count = word1_map.get(char, 0)
            if not letter_count:
                word1_map[char] = 1
                continue
            word1_map[char] = letter_count + 1

        for char in word2:
            letter_count = word2_map.get(char, 0)
            if not letter_count:
                word2_map[char] = 1
                continue
            word2_map[char] = letter_count + 1

        word1_set_diff = set(word1_map.keys()).difference(set(word2_map.keys()))
        word2_set_diff = set(word2_map.keys()).difference(set(word1_map.keys()))

        # the characters that are different do not have the same conut, then you
        # cannot make the string
        if len(word1_set_diff) > 0:
            # iterate over the elements in the other word's set to see if any of
            # the letters have the same count.
            for char2 in word2_set_diff:
                for char1 in word1_set_diff:
                    if word1_map.get(char1) == word2_map.get(char2):
                        word1_map[char1] = 0
                        word2_map[char2] = 0

            # print(word1_map.values())
            # print(word2_map.values())
            are_equal = sum(word1_map.values()) != sum(word2_map.values())
            return are_equal
        return True

    def closeStringsBits(self, word1: str, word2: str) -> bool:

        if len(word1) != len(word2):
            return False

        # Initialize frequency maps and bitmasks
        word1_map = [0] * 26
        word2_map = [0] * 26

        # word_i-th_bit is the integer representation of the word
        # this represents the resulting integer if you were to represent all of
        # the letters as numbers in a 26 bit integer
        word1_bit = 0
        word2_bit = 0

        # Count frequencies and build bitmask for word1
        for char in word1:
            index = ord(char) - ord("a")
            print("idx", index)

            print("idx-th element before bit ops", word1_map[index])
            word1_map[index] += 1

            print("word1_bit before", word1_bit)
            word1_bit |= 1 << index
            print("word1_bit after", word1_bit)
            print("idx-th element after bit ops", word1_map[index])

        print("\n")
        # Count frequencies and build bitmask for word2
        for char in word2:
            index = ord(char) - ord("a")
            word2_map[index] += 1
            word2_bit |= 1 << index
            print("word2_bit", word2_bit)

        print("word1_map", word1_map)
        print("word2_map", word2_map)

        # Check if both words have the same set of characters
        print("final word1_bit, word2_bit", word1_bit, word2_bit)
        if word1_bit != word2_bit:
            return False

        # Sort frequency maps and compare
        word1_map.sort()
        word2_map.sort()

        return word1_map == word2_map


### better implementation:
# from collections import Counter
# class Solution:
#     def closeStrings(self, word1: str, word2: str) -> bool:
#         # Base case: Lengths must match
#         if len(word1) != len(word2):
#             return False
#
#         # Count character frequencies
#         freq1 = Counter(word1)
#         freq2 = Counter(word2)
#
#         # Check if both words have the same unique characters
#         if set(freq1.keys()) != set(freq2.keys()):
#             return False
#
#         # Check if the sorted frequency lists match
#         if sorted(freq1.values()) != sorted(freq2.values()):
#             return False
#
#         return True
#


tests = [
    # base cases
    ["", "a"],
    ["a", "bb"],
    # # simple test cases
    ["daa", "qqq"],
    ["aaa", "bbb"],
    ["abc", "bca"],
]


s = Solution()
for test in tests:
    print("test case:", test)
    print(s.closeStringsBits(test[0], test[1]))
