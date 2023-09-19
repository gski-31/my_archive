// Algorithm Challenges
// The Dojo Collection
// Chapter_20_Spatial_Logic_Estimation

//  Minding the Gap
// Given two points on a two-dimensional plane, return the distance between them.

// Second: what if the points are in 3-D space?

//  Sketching the Circle
// Draw a circle on screen, given screen dimensions, circle’s center and radius, all in pixels. You can call setPixel(x,y) to draw a single point.

// Second: Once you’ve calculated the first 1/8 of the circle, can you quickly draw the rest?

//  Describing the Rectangle (or, ‘Get Rect’)
// How would you best represent a two-dimensional rectangle, if you were passing one as a parameter?

//  Detecting the Overlap
// Write a function to determine whether two rectangles overlap. Design an elegant function interface.

//  Checking the Connectedness Count
// You are given an array containing a number of rectangles. Determine whether each rect intersects with at least one other.

// Second: Determine whether all rectangles interconnect into one interconnected section. If rect A connects to rects B and C, plus rects B and D connect, then ABCD are interconnected. If AB are separate from CD, then ABCD do not interconnect: they create 2 (not 1) sections.

//  Admiring the Skyline
// You are given array of building objects; your job is to calculate the skyline. Buildings consist of [start,height,width]; a skyline is an array of [start,height] elements. Given the array [[2,3,4],[5,1,7]], return [[0,0],[2,3],[6,1],[12,0]].

//  Calling the Big One
// You are given an array, containing non-negative integers that correspond to a height (on the Y-axis) for that index (on the X-axis). In essence, this array of integers represents the same type of skyline shape that you worked with in the previous challenge. Return the size of the largest rectangle that can be drawn within that shape. Note that the lines outlining the shape of the input are all vertical and horizontal; there are no diagonals.

//  Finding the Fraud
// Given 64 apparently identical coins, one of which is heavy, how many weighings do you need (in the worst-case), to determine the bad coin? How low can you get the average number of weighings?

// Second: what if it is possible that there is NO bad coin? Does that change your calculus?

//  Revealing the Wrong
// Given twelve apparently identical coins, one of which is either light or heavy, how many weighings do you in order to identify the bad coin – as well as whether it is light or heavy?

// Second: what if it is possible that there is NO bad coin? Does that change your calculus?

// Third: extrapolating, what is the maximum number of coins you can handle with five weighings?

//  Querying the Quarters
// You have a digital scale that gives very precise readouts; it can handle up to 90 grams. Six vendors have each given you large stacks of apparently identical quarters. One vendor is dishonest: evidently his entire coin stack is counterfeit. Each counterfeit quarter weighs 6 grams instead of the usual 5.67g. If you know that one pile consists of heavy quarters, determine which one, in only a single weighing.

//  Lighting the Way
// Three light switches are located outside a room, where we cannot see which lamps they control. Andy figured a way to set the switches to determine the mapping after a single trip into the room. Can you?

//  Making the Train
// A family of four must cross a bridge to reach a midnight train on the other side. The rickety bridge only holds two; they can only cross with their one flashlight. The youngest can cross in 1 minute; the next can cross in 2; the parent in 6; the grandparent needs 12. Can they make their train in 20 minutes?

//  Escaping the Hunt
// Fiona Fox wants Dunn the Duck for lunch. Now Dunn is in the center of a circular pond. Fiona cannot enter the water; she must run around it. To fly away and escape, Dunn must reach the edge before Fiona reaches him. Fiona runs four times as fast as Dunn swims. Is Dunn done, or can he escape?

//  Surviving the Train
// While hiking, Minh and Crazy Brian find a narrow train tunnel running north-south. At Crazy Brian’s urging, they go in. At exactly 2/3 through this tunnel (closer to the north end than the south end), they hear a train nearing! Crazy Brian runs toward the train, just exiting the tunnel as it enters. Minh runs the other way, also barely escaping the tunnel as the train passes. Both Minh and Crazy Brian ran 10mph. How fast was the train? Also, did the train enter at the north end or the south end of this tunnel?

//  Racing the Balls
// Two identical-length tracks are each wide enough for a rolling marble. Starting at the same moment, marbles accelerate downward, diverge (one upward, one downward), reconverge at a point lower than where they diverged, and continue onward, both finishing. Do the marbles finish at the same time?

//  Crossing the River
// Traveling with a fox, a hen and a sack of corn, you reach a river with rowboat. The boat can only fit you and one other. If left alone, hen eats corn; likewise fox eats hen. Can you get everything across? How?

//  Burning the String
// You have two pieces of string, and evidently both will take precisely 60.0 seconds to burn – although they burn at unpredictable rates during that time. Can you use these to measure 45.0 seconds exactly?

//  Outfoxing the Fox
// Fiona Fox is hungry again. She has trapped Reggie Rabbit inside a circular pen. Reggie can run exactly as fast as Fiona. Can Fiona catch Reggie? What is Reggie’s best strategy to survive?

//  Swapping the Lockers
// You are at a high school with lockers numbered 1-100. First open them all. Then, for all locker numbers divisible by two, toggle the locker door (if open, close it; if closed, open it). Then, toggle all that are divisible by three. Then, toggle those divisible by four…. Repeat this process for successive integers until, finally, you toggle the one and only locker (#100) that is divisible by one hundred. How many lockers are open at this point? Which ones? Why?

//  Combining the Numbers
// You are given five numbers. Using any combination of the four common arithmetic operators (+ - * /), but keeping these numbers in the order they were given, combine the first four to make a total of the fifth. For example, given (3, 10, 2, 40, 100), one solution is (3*10*2)+40, which equals 100.

//  Pricing the Movie
// A movie plus popcorn costs $11. Movie costs $10 more than popcorn. How much does popcorn cost?

//  Building the Widgets
// If 5 machines build 5 widgets in 5 hours, how long will 100 machines take to build 100 widgets?

//  Padding the Pond
// A large pond has a patch of lily pads in the center. Each day the patch doubles in size. The entire pond is covered in 48 days. How many days does it take to cover half the pond?

//  Elevating the Passengers
// Design the operating software for an elevator system that serves a 20-story office building. Each of the four elevators contain buttons for floors 1-20, for passengers to press when they enter the elevator, indicating where they want to travel. The north elevator receives more sunlight than the other elevators. Near the elevator doors on each floor there are Up and Down buttons to call an elevator going that direction. The lobby at floor 1 has a marble floor. Elevators can handle 1000 kilograms of weight, and 100 persons work on each floor. The busiest times for elevator travel are between 7:30am and 8:15am, and between 4:30pm and 6:30pm. Office workers are, for the most part, patient – except for old man Surrey who always complains about ‘slow creaky elevators’. The building owner, Bo, has a Spaniel named ‘Spike’, and this dog weighs exactly 10.0 pounds. The doors to the elevators remain open for 10 seconds at a time, and the elevator cars take an average of 1 second/floor to ascend and descend. Spike likes the south elevator, which has transparent glass walls. Bo thinks Spike is just about perfect[3].

//  Piano Tuners
// How many piano tuners are there in the U.S.?

//  Basketballs in a 747
// How many basketballs fit into a 747? With your answer, state which parts of the plane are used.

//  Kindergarten Teachers
// How many kindergarten teachers work in the state of Washington?

//  Weight of a Ferry
// What is the weight of the Bainbridge Island ferry? Full or empty?

//  Hot Diggity
// How many hot dogs made from an adult cow?

//  Beachfront Property in Colorado
// How much would the ocean rise, if all ice melted?

//  Earth’s Circumference
// What is the circumference of the earth?

//  Gas Stations
// How many gas stations are there in this state?

//  Line ‘Em Up
// How many golf balls would you require, to completely encircle the Earth at the equator?

//  Building Capacity
// How many people work in that 72-story office building over there, would you say?

//  Painting a Room
// To paint this room, how many cans of paint would we need? Just guess, why don’t you….

//  Blades of Grass
// How many blades of grass would you estimate there are, in your state?

//  Lottery Stack
// The Powerball lottery contains seven numbers, each number between 1 and 60. How tall would a stack of every possible ticket be?




