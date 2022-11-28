const skills = [
    {id: 125223, skill: 'Googling', learned: true},
    {id: 127904, skill: 'Front End', learned: true},
    {id: 139608, skill: 'Back End', learned: false}, 
    {id: 149808, skill: 'Database', learned: false},
  ];
  
  module.exports = {
    getAll, 
    getOne, 
    create,
    deleteOne,
  };
  
  function deleteOne(id) { 
    const idx = skills.findIndex(skill => skill.id === parseInt(id)); 
    skills.splice(idx, 1);
  }
  function create(skill) { 
    skill.id = Date.now() % 1000000
    skill.learned = false; 
    skills.push(skill); 
  }
  function getAll() {
    return skills;
  }
  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }