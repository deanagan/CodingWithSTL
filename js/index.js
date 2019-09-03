

var whySTL = new Vue({
    el: '.whyUseStl',
    data: {
        whys : [ 'It is well tested and optimised.',
                  'Don\'t reinvent the wheel.',
                  'It leads to shorter more compact code.'
        ]
    }
});

var coverage = new Vue({
    el: '.coverage',
    data: {
        topcoverage : [
            'Why use STL and what is its approach',
            'STL Containers',
            'Example Algorithm: std::find_if',
            'Discovering Lambdas',
            'The Power of Iterators',
            'Algorithm Friendly Class via overloading',
            'Refactoring to Use Algorithms'
        ],

        lambdacoverage : [
            'Syntax',
            'Captures',
            'Mutable',
            'Guidelines'
        ]
    }
});

var stlApproach = new Vue({
    el: '.stlapproach',
    data: {
        approaches : [
            'There are more free functions instead of member functions ( e.g. std::find(container..) instead of container.find() ).',
            'Algorithms are designed to work for most containers.',
            'Algorithms work with iterators.',
        ]
    }

});

var choosingcontainer = new Vue({
    el: '.choosingcontainer',
    data: {
        baseurl : 'https://en.cppreference.com/w/cpp/container/',
        containers: [
            { name: "vector", descriptions: [
                "A dynamic array, capable of random access.",
                "Requires contiguous memory.",
                "Resizes itself when inserting or erasing an object.",
                "Inserting to the back takes amortized constant time."
            ]},
            { name: "deque", descriptions: [
                "Also known as double ended queue.",
                "Allows fast insertion and deletion at both its beginning and its end.",
                "Elements are not stored contiguously, but rather individual allocated fixed sized arrays (typical implementation).",
                "Larger minimal memory cost than a vector.",
                "Unlike a vector, it does not involve copying of the existing elements to a new memory when expanding."

            ]},
            { name: "list", descriptions: [
                "Supports constant time insertion and removal of elements from anywhere in the container.",
                "Usually a doubly linked list.",
                "Elements are not stored contiguously, but rather individual allocated fixed sized arrays (typical implementation).",
                "Larger minimal memory cost than a vector.",
                "Unlike a vector, it does not involve copying of the existing elements to a new memory when expanding."

            ]},
            { name: "forward_list", descriptions: [
                "Supports constant time insertion and removal of elements from anywhere in the container.",
                "Implemented as singly-linked list.",
                "Elements are not stored contiguously, but rather individual allocated fixed sized arrays (typical implementation).",
                "Larger minimal memory cost than a vector.",
                "Unlike a vector, it does not involve copying of the existing elements to a new memory when expanding."

            ]},
            { name: "set", descriptions: [
                "An associative container that contains a sorted set of unique objects of type Key.",
                "Sorting is done using the key comparison function Compare",
                "Search, removal, and insertion operations have logarithmic complexity.",
                "Sets are usually implemented as red-black trees.",
            ]},
            { name: "map", descriptions: [
                "Is a sorted(unlike unordered_map) associative container that contains key-value pairs with unique keys.",
                "Sorting is done using the key comparison function Compare",
                "Search, removal, and insertion operations have logarithmic complexity.",
            ]},
        ]
    }
});


var algosample = new Vue({
    el: '.algosample',
    data: {
        entries: [
            {
                heading : "Example Algorithm: std::find_if",
                subheading: "Finding the first odd number",

                code: [
                    replaceDoubleSpaceStrings(`std::vector<int> n { 2, 4, 6, 9, 10 };
                     auto result_iter = std::find_if(begin(n), end(n), ???);`)
                ]
            },

            {
                heading : "Before C++11, we had 2 common approaches",
                subheading: "Using a stand alone/free function",

                code: [
                    'bool IsOdd(int n) { return n % 2 != 0; }',
                    dedentStrUsing1stLineIndent(`
                    void printOdd() {
                        std::vector<int>::iterator it; // no auto yet!
                        it = std::find_if(n.begin(), n.end(), IsOdd);
                        if (it != n.end()) {
                            std::cout << *it;
                        }
                    }`)
                  ],
            },

            {
                heading : "Or using a function object or functor",
                subheading: "",

                code: [
                    dedentStrUsing1stLineIndent(`
                    struct IsOdd {
                        bool operator()(int n) const {
                            return n%2 != 0;
                        }
                    };`),
                    dedentStrUsing1stLineIndent(`
                    void printOdd() {
                        std::vector&ltint&gt::iterator it; // no auto yet!
                        IsOdd isOdd;
                        it = std::find_if(n.begin(), n.end(), isOdd);

                        if (it != n.end()) {
                          std::cout << *it;
                        }
                    }`)
                  ],
            },

            {
                heading : "With Modern C++(C++11 and beyond), we now have lambdas.",
                subheading: "C++14 and beyond has generic lambdas too!",

                code: [
                    dedentStrUsing1stLineIndent(`
                    void printOdd() {
                        auto it = std::find_if(begin(n), end(n), [] (int n) {
                            return n%2 != 0;
                        });

                        if (it != n.end()) {
                          std::cout << *it;
                        }
                    }`),

                  ],
            },

        ]
    }

});