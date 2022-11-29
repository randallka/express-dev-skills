const Skill = require('../models/skill')

module.exports = { 
    index, 
    show, 
    new: newSkill,
    create,
    delete: deleteSkill,
    edit, 
    update
}
function update(req, res) { 
    req.body.learned = !!req.body.learned;
    editSkill = Skill.getOne(req.params.id); 
    editSkill.skill = `${req.body.skill}`
    editSkill.learned = req.body.learned; 
    res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) { 
    const skillEdit = Skill.getOne(req.params.id); 
    res.render('skills/edit', {skill : skillEdit});
}
function deleteSkill(req, res) { 
    Skill.deleteOne(req.params.id); 
    res.redirect('/skills'); 
}
function create(req, res) { 
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
}
function newSkill(req, res) { 
res.render('skills/new');
}

function index(req, res) { 
    const allSkills = Skill.getAll();
    res.render('skills/index', {skills : allSkills})
}

function show(req, res) { 
    const skillFromDB = Skill.getOne(req.params.id);
    res.render('skills/show', {skill : skillFromDB})
}