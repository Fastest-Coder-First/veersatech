# Personal Finance Tracker

The Personal Finance Tracker is a web-based application built with JavaScript, HTML, and CSS and node.js. It allows users to track their income and expenses, manage categories, and monitor their financial transactions.

The application is designed to be simple, intuitive, and user-friendly. It provides a clean, modern, and responsive user interface that is easy to navigate and understand. It also offers a range of features to help users manage their finances effectively.

# Screenshots

More detailed information like [Screenshots](./screenshots.md), a [Demo Video](./media/hackathon_video.webm), a [Youtube Video](https://youtu.be/B71sPOImtVA),  about the application extensive [Features](./userguide.md#features), and intutive usage can be found in the [User Guide](./userguide.md) and [Screenshots](./screenshots.md) file.

# Development Details

The project has been developed as a part of [Fastest Coder Hackathon](https://www.fastestcoderfirst.com/) project with extensive [usage of Github CoPilot](#github-copilot-usage). 

## GitHub Copilot Usage

During the development of this project, we leveraged the power of GitHub Copilot, an AI-powered code generation tool. Copilot assisted us in various aspects of the development process, providing intelligent code suggestions and automating repetitive coding tasks. Here's how we used Copilot and the benefits it provided:

1. **Code Generation:** Copilot helped us generate boilerplate code, complex algorithms, and common programming patterns. By understanding our code context, it provided accurate and contextually relevant code snippets, saving us time and effort.

2. **Enhanced Productivity:** With Copilot's assistance, we were able to accelerate our development speed and productivity. It significantly reduced the time spent on searching for documentation, researching solutions, and writing repetitive code, allowing us to focus on more critical aspects of the project.

3. **Improved Code Quality:** Copilot's suggestions were aligned with coding conventions and best practices, leading to cleaner, more maintainable code. It helped us catch potential bugs, encouraged consistent code structures, and adhered to industry-standard practices, resulting in improved code quality.

4. **Learning Resource:** Copilot served as a valuable learning tool throughout the project. By observing the code suggestions provided by Copilot, we gained insights into programming patterns, idiomatic expressions, and industry-standard practices. This allowed us to enhance our coding skills and deepen our understanding of the programming language.

5. **Documentation Assistance:** Copilot helped us generate documentation for our code. It provided accurate and contextually relevant comments, allowing us to quickly and efficiently document our code. Even in writing this readme file a lot of assitance was provided by Copilot!

It's important to note that while Copilot provided significant assistance, we reviewed and validated all generated code to ensure it aligned with our project requirements and followed our coding standards. Copilot should be used as a supportive tool, complementing our expertise and judgment as developers.

Overall, GitHub Copilot proved to be a valuable asset, helping us streamline our development process, improve productivity, and produce high-quality code efficiently.


## Architecure and Technical Details

The project is developed using the following MERN technologies and frameworks:

- Frontend: JavaScript, HTML, CSS
- Backend: Node.js with Express
- Database: mongoDB

![Architecture Diagram](./media/Architecture.png)

The application follows a client-server architecture. The frontend is built using JavaScript, HTML, and CSS. The backend is built using Node.js with Express. The database is built using mongoDB.

## Development Team
The project is developed from scratch by the team members and no code was copied from any other source. 

| Name | Github Handle | Role | Image |
| --- | --- | --- | --- |
| [Vipul Taneja](https://www.linkedin.com/in/vipultaneja) | @vipulTaneja | Team Lead | ![Vipul](./media/Vipul.png) |
| [Gourav Kumar Singh](https://www.linkedin.com/in/gourav-kumar-singh-246b4621b/)  | @champgourav007 | Full Stack Developer | ![Gourav](./media/Gourav.png) |
| [Daya Singh](https://www.linkedin.com/in/daya-singh10/) | @dayalubana | Full Stack Developer | ![Daya](./media/Daya.png) |
| [Chaitanya Gupta](https://www.linkedin.com/in/guptachaitanya/) | @Chaitanya31612 | Full Stack Developer | ![Chaitanya](./media/Chaitanya.png) |

## Data Model

The application consists of the following entities:

![data model](./media/data-model.png)

1. Transaction:
   - ID: String or Number
   - Description: String
   - Amount: Number
   - Type: String (income or expense)

2. User:
   - ID: String or Number
   - Username: String
   - Email: String
   - Password: String

3. Categories:
   - ID: String or Number
   - Name: String
   - ParentID: String or Number (optional)

4. Accounts:
   - ID: String or Number
   - Name: String
   - Balance: Number
   - Currency: String

## Installation and Usage

### 1. Clone the repository:
   - Open your command-line interface (CLI) or terminal.
   - Navigate to the directory where you want to clone the repository using the cd command.
   - Once you are in the desired directory, use the git clone command followed by the repository URL.
   - Wait for the cloning process to complete.
   - You have successfully cloned the directory!

### 2. Install dependencies:

#### Prerequisites
Make sure you have [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com) (Node Package Manager) installed on your machine.

#### Steps

1. Ensure cloning process above is completed without any error. .

2. Navigate to the project's root directory in your command-line interface (CLI) or terminal.

4. Switch to folder `backend` and run the following command to install the project dependencies:
   ```shell
   npm install
   ```
5. Switch to folder `frontend` and run the following command to install the project dependencies:
   ```shell
   npm install
   ```

### 3. Start the API server:
- create a .env file in root of `backend` folder with following entries
```shell
TOKEN_KEY=<secret_key>
MONGO_URI="<enter your mongo db URI here>"
```
- Switch to folder `backend` and run the following command to run API server
```shell
npm start
```

### 4. Start the UI server:
- Switch to folder `frontend` and run the following command to run the UI server
```shell
npm start
```


### 5. Access the application in your browser at [http://localhost:3000](http://localhost:3000).


## User Guide
For detailed information on how to use the Personal Finance Tracker and its various features, please refer to the [User Guide](./userguide.md) file.




