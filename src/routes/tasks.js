const express = require('express');
const router = express.Router();
let tasks = []; let nextId = 1;
router.post('/', (req, res) => { const { title, description = '', priority = 'medium', assignee = '', status = 'pending' } = req.body; if (!title || !title.trim()) return res.status(400).json({ error: 'title alanı zorunludur' }); const task = { id: nextId++, title: title.trim(), description, priority, assignee, status, createdAt: new Date().toISOString() }; tasks.push(task); res.status(201).json(task); });
router.get('/', (req, res) => res.json(tasks));
router.get('/:id', (req, res) => { const task = tasks.find(t => t.id === Number(req.params.id)); if (!task) return res.status(404).json({ error: 'Görev bulunamadı' }); res.json(task); });
router.put('/:id', (req, res) => { const task = tasks.find(t => t.id === Number(req.params.id)); if (!task) return res.status(404).json({ error: 'Görev bulunamadı' }); Object.assign(task, req.body, { id: task.id }); res.json(task); });
router.delete('/:id', (req, res) => { const index = tasks.findIndex(t => t.id === Number(req.params.id)); if (index < 0) return res.status(404).json({ error: 'Görev bulunamadı' }); const [removed] = tasks.splice(index, 1); res.json({ message: 'Görev silindi', task: removed }); });
module.exports = router;
