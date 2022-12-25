/*  
//Инициалы пользователя
// Завершите функцию getInitials, чтобы она возвращала инициалы пользователя.
const user1 = {
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};
  
const user2 = {
    firstName: "Charlie",
    lastName: "Fort",
    age: 31
};
  
/**
  * @param {Object[]} user
  * @param {string} user[].firstName
  * @param {string} user[].lastName
  * @param {number} user[].age
*/

/*
function getIntials(user) {
    console.log(`${user.firstName[0]}${user.lastName[0]}`)
}
  
  
// Sample usage - do not modify
getIntials(user1); // "SD"
getIntials(user2); // "CF"
*/


/*
// Добавление чисел
// Завершите функцию addNumberOfChapters, чтобы она добавила ключ numberOfChapters в объект course.

const course1 = {
    name: "Learn English",
    isCompleted: true
};
  
const course2 = {
    name: "Learn JavaScript",
    isCompleted: false
};
  
/**
  * @param {Object[]} course
  * @param {number} count
  */
/*
function addNumberOfChapters(course, count) {
    course.numberOfChapters = count
    console.log(course)
}

// Sample usage - do not modify
addNumberOfChapters(course1, 80); // { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
addNumberOfChapters(course2, 60); // { name: 'Learn JavaScript', isCompleted: false, numberOfChapters: 60 }
*/

/*
// Сумма оценок
// Завершите функцию getSumOfGrades, чтобы она возвращала сумму всех оценок.

const student = {
    name: "Sam Doe",
    age: 24,
    grades: [13, 15, 15, 14, 18]
};
  
/**
  * @param {Object} student
  * @param {string} student.name
  * @param {number} student.age
  * @param {number[]} student.grades
*/

/*
  function getSumOfGrades(student) {
      console.log(student.grades.reduce((sum, grade) => sum += grade))
  }

// Sample usage - do not modify
getSumOfGrades(student); // 75
*/

/*
// Имя пользователя
// Завершите функцию getLastUserFullName, чтобы она возвращала полное имя последнего пользователя.
const users = [
	{
	  firstName: "Sam",
	  lastName: "Blue",
	  age: 21,
	},
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  }
];

/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */

/*
function getLastUserFullName(users) {
	console.log(`${users[users.length - 1].firstName} ${users[users.length - 1].lastName}`);
}


// Sample usage - do not modify
getLastUserFullName(users); // "Charlie Bon"
*/

/*
// Первая оценка студента
//Завершите функцию getFirstStudentGrade, чтобы она вернула оценку первого студента из курса обучения английскому.

const students = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18
    }
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19
    }
  }
];

/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
/*
function getFirstStudentGrade(students) {
	// your code
}


// Sample usage - do not modify
getFirstStudentGrade(students); //
*/

/*
//  Сумма вложенных оценок
// Завершите функцию getSumGrades, чтобы она суммировала все оценки за курс learnEnglish в массиве.

const students = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18
    }
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19
    }
  }
];

/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
/*
function getSumGrades(students) {
	let sum = 0;
  students.forEach(student => sum += student.learnEnglish.grade)
  console.log(sum)
}


// Sample usage - do not modify
getSumGrades(students); // 37
*/

/*
// Имена пользователей
// Завершите функцию getFullNames, чтобы она возвращала массив содержащий полное имя каждого пользователя.

const users = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  }
];

/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */
/*
function getFullNames(users) {
	console.log(users.map(function(user) {
    return `${user.firstName} ${user.lastName}`
  }))
}

// Sample usage - do not modify
getFullNames(users); // [Sam Blue, Charlie Bon]
*/
