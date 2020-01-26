const folders = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

(function addFileTree(folders, node) {
  function $(el) {
    return document.createElement(el);
  }
  const newFolder = $('ul');

  for (let folder of folders) {
    const childFolder = $('li');

    const title = $('div');
    const icon = $('i');
    icon.classList.add('material-icons');
    const span = $('span');
    title.appendChild(icon);
    title.appendChild(span);
    span.innerHTML = folder.title;

    childFolder.appendChild(title);
    newFolder.appendChild(childFolder);
    if (folder.folder) {
      title.classList.toggle('folder');
      icon.innerText = 'folder';
      title.addEventListener('click', function() {
        icon.innerText === 'folder' ? icon.innerText = 'folder_open' : icon.innerText = 'folder';
        childFolder.querySelector('.closed').classList.toggle('opened');
      });
      if (folder.children) {
        addFileTree(folder.children, childFolder);
      } else {
        let empty_folder = $('div');
        empty_folder.classList.add('empty_folder', 'closed');
        empty_folder.innerText = 'Folder is empty';
        childFolder.appendChild(empty_folder);
      }
    } else {
      title.classList.toggle('file');
      icon.innerText = 'insert_drive_file';
      icon.classList.add('file_image');
    }
  }
  node.appendChild(newFolder);
  if (newFolder.parentNode !== rootNode) {
    newFolder.classList.toggle('closed');
  }
})(folders, rootNode);
