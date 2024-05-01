/**
 * Contains the miscellaneous route handlers.
 * @author Omosebi Toluwani enoch <https://github.com/Enochthedev>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
