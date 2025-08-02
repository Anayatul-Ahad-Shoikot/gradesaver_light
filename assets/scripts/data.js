const courseData = [
    {
        batch: "ICS-01",
        title: "Introduction To Computer Systems",
        instructor: "Jannatul Ferdous Deepty",
        starting: "10th Aug",
        duration: "Full Trimester",
        class_time: "8:30PM - 10:00PM",
        is_reg_open: true,
        course_fee: "700৳",
        offer_fee: "350৳",
        offer_rate: "50",
        registration_link: "#",
        course_overview: "This course introduces the basics of how computer systems work...",
        main_learnings: "Computer Components - Input/Output Devices - Operating Systems - Data Processing",
        passive_learnings: "History of Computers - Future of Tech - Industry Use Cases",
        supports: {
            mentorship: true,
            assignments: true,
            exams: false,
            qna: true
        }
    },
    {
        batch: "SPL-01",
        title: "Structured Programming Language",
        instructor: "Tashin Parvez",
        starting: "10th Aug",
        duration: "Full Trimester",
        class_time: "9:00PM - 10:30PM",
        is_reg_open: true,
        course_fee: "800৳",
        offer_fee: "400৳",
        offer_rate: "50",
        registration_link: "#",
        course_overview: "This course introduces the basics of how computer systems work...",
        main_learnings: "Computer Components - Input/Output Devices - Operating Systems - Data Processing",
        passive_learnings: "History of Computers - Future of Tech - Industry Use Cases",
        supports: {
            mentorship: true,
            assignments: true,
            exams: false,
            qna: true
        }
    },
    {
        batch: "OOP-01",
        title: "Object Oriented Programming",
        instructor: "Anayatul Ahad Shoikot",
        starting: "10th Aug",
        duration: "Full Trimester",
        class_time: "9:00 - 10:30 PM",
        is_reg_open: true,
        course_fee: "800৳",
        offer_fee: "400৳",
        offer_rate: "50",
        registration_link: "#",
        course_overview: "Welcome to the Object-Oriented Programming (OOP) with Java course at GradeSaver — designed not just to teach you how to write code, but to shape how you think like a programmer. This course dives deep into the principles of OOP, the industry-standard way of writing scalable, modular, and reusable software. Whether you're transitioning from procedural languages like C, or you're entirely new to Java, this course will provide you with a strong conceptual foundation and real coding skills that set you apart. Each concept will be taught visually — with live hard-coded examples and clear breakdowns of what's happening, why it's happening, and how it impacts your program. We'll cover practical examples, step-by-step explanations, and logic-building techniques to help you build confidence. From constructors to inheritance, polymorphism to exception handling — everything will be taught in a way that's simple, intuitive, and applicable in real projects.",
        main_learnings: "rFrom C to Java, mindset shift, Why OOP?, Java Application Structure, Packages -Data Types, Variables, Identifiers, Literals and Scopes - Reference Variables, Java's Memory Model(Stack vs Heap), Pass-by-Value in Java, Garbage Collection - Operators: Arithmetic, Relational, Logical, assignment, Control Statements, switch, loops - I/O, Arrays (1D, 2D basics) - class structure in Java, instances, Constructors (Default, Parameterized), Initialization Blocks, 'this' keyword in depth, Object Creation & Member Access - Access Modifiers: public, private, protected, default, Encapsulation (Getter and Setter methods), Method Overloading, Constructor Overloading - Inheritance single & multi, super keyword and constructor chaining, Object class methods: toString(), equals() - Polymorphism via Method Overriding, final vs static keyword use cases, Upcasting & Dynamic Method Dispatch, Benefits of Polymorphism in real-world - Abstraction, Difference: Abstract Class vs Interface, Functional Interface, Default Methods, Interface variables and implementation logic - Exception Basics: try-catch-finally, Nested Try Blocks, throw vs throws, Checked vs Unchecked Exceptions, User Defined Exceptions, Stack Trace and Method Stack - Introduction to AWT/Swing Components, Containers and Layout, Buttons, Labels, TextFields, Panels, Event Handling Model: Source, Listener, Event Object, Handling Multiple Events with ActionListeners - File Handling with Streams, Reading/Writing Files, BufferedReader, FileReader, FileWriter, Exception handling in file operations - List Interface and ArrayList, Iterators and Enhanced for-loop, Sorting using Comparable and Comparator, Collections utility class",
        passive_learnings: "Eclipse IDE - Problem Solving mindset. - Understanding problems. - How to start code and from where to.",
        supports: {
            mentorship: true,
            assignments: false,
            exams: true,
            qna: true
        }
    },
    {
        batch: "DSA1-01",
        title: "Data Structure & Algorithm I",
        instructor: "Sayeem Been Zaman",
        starting: "10th Aug",
        duration: "Full Trimester",
        class_time: "10:00 - 11:30 PM",
        is_reg_open: true,
        course_fee: "800৳",
        offer_fee: "400৳",
        offer_rate: "50",
        registration_link: "#",
        course_overview: "Welcome to DSA-1 (Data Structures & Algorithms Part 1) — the core building block of smart, optimized, and scalable programming. This course is crafted to develop your analytical thinking by exploring the most essential data structures and foundational algorithms in computer science. Starting from the basics of time complexity and array manipulation, we'll advance through powerful techniques like sorting, recursion, trees, graphs, and hashing. You'll learn not just how each structure works, but when and why to use them in real-world scenarios. Each concept will be broken down with hard-coded visual explanations, helping you intuitively understand the behavior of data and logic behind each algorithm.",
        main_learnings: "Computer Components - Input/Output Devices - Operating Systems - Data Processing",
        passive_learnings: "History of Computers - Future of Tech - Industry Use Cases",
        supports: {
            mentorship: true,
            assignments: false,
            exams: true,
            qna: true
        }
    },
    {
        batch: "DSA2-01",
        title: "Introduction To Computer Systems",
        instructor: "Jannatul Ferdous Deepty",
        starting: "10th Aug",
        duration: "Full Trimester",
        class_time: "7:00 PM - 8:30 PM",
        is_reg_open: true,
        course_fee: "800৳",
        offer_fee: "400৳",
        offer_rate: "50",
        registration_link: "#",
        course_overview: "This course introduces the basics of how computer systems work...",
        main_learnings: "Computer Components - Input/Output Devices - Operating Systems - Data Processing",
        passive_learnings: "History of Computers - Future of Tech - Industry Use Cases",
        supports: {
            mentorship: true,
            assignments: true,
            exams: false,
            qna: true
        }
    },
    {
        batch: "BChem-01",
        title: "Introduction To Computer Systems",
        instructor: "Jannatul Ferdous Deepty",
        starting: "10th Aug",
        duration: "Full Trimester",
        class_time: "7:00 PM - 8:30 PM",
        is_reg_open: true,
        course_fee: "700৳",
        offer_fee: "350৳",
        offer_rate: "50",
        registration_link: "#",
        course_overview: "This course introduces the basics of how computer systems work...",
        main_learnings: "Computer Components - Input/Output Devices - Operating Systems - Data Processing",
        passive_learnings: "History of Computers - Future of Tech - Industry Use Cases",
        supports: {
            mentorship: true,
            assignments: true,
            exams: false,
            qna: true
        }
    },
    {
        batch: "CN-01",
        title: "Computer Networks",
        instructor: "MD. Al Akib (Cisco Certified Network Associate)",
        starting: "10th Aug",
        duration: "Full Trimester",
        class_time: "9:30 - 11:00 PM",
        is_reg_open: true,
        course_fee: "800৳",
        offer_fee: "400৳",
        registration_link: "#",
        course_overview: "Welcome to the Computer Networks course at GradeSaver — a foundational journey into the digital highways that power our modern world. This course offers a comprehensive introduction to how computer networks operate — from the core TCP/IP and OSI models to practical concepts like packet vs. circuit switching, network delays, data loss, and different types of transmission media. You'll not only understand how data travels across a network, but also why it behaves the way it does. Classes will be taught visually and practically, using tools like Cisco Packet Tracer for simulating enterprise-level networks and Wireshark to capture and analyze real-time traffic. We'll also touch on wireless networking and introduce basic principles of network security to build a complete understanding from the ground up.",
        main_learnings: "Application Layer: HTTP, SMTP, DNS, and web-based protocols (in depth) - Transport Layer: UDP, TCP, flow and congestion control (in depth) - Network Layer: Routing, IPv4/IPv6, NAT, fragmentation, routing algorithms - Link Layer & LANs: MAC protocols, Ethernet, CSMA/CD, ARP - Simulation in Packet Tracer : Network device (Router and Switch) configuration, end device Configuration, simulation of a whole enterprise network (covering all CN Lab topics of UIU) - Introduction to Wireshark (a packet sniffing tool)",
        passive_learnings: "Real Life Enterprise Network Concepts - Introduction to Wireless Networks - Basic Network Security Concepts - Bonus: Intro to Cryptography",
        supports: {
            mentorship: true,
            assignments: false,
            exams: true,
            qna: true
        }
    }
];