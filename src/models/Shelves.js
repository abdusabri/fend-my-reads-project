/*
** This static class is used so that the application creates
** shelves dynamically based on the values in the array, and
** is also used by the MoveToShelf component. This way, the
** components are more dynamic, independent, and whenever 
** needed, changes will be minimal and central (only here and/or 
** the App component - depending on the case)
*/
class Shelves {
    static shelves = [
        {
          id: 1,
          title: 'Currently Reading',
          value: 'currentlyReading'
        },
        {
          id: 2,
          title: 'Want to Read',
          value: 'wantToRead'
        },
        {
          id: 3,
          title: 'Read',
          value: 'read'
        }
    ]
}

export default Shelves