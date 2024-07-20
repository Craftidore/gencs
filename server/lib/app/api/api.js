import express from 'express';
import params from './paramHandlers.js';
import { get, post, del } from './requestHandlers.js';
import { IS_DEBUG } from '../../config.js';

const router = express.Router();

router.param('characterid', params.characterid);
router.param('templateid', params.templateid);

const invalidRequestMethod = (req, res) => {
    res.status(404);
    res.json({ 'message':'Invalid request method.' });
}

router.route('/characters')
    .get(get.getManyCharacters)
    .post(post.createCharacter)
    .all(invalidRequestMethod);

router.route('/characters/:characterid')
    .get(get.getSingleCharacter)
    .post(post.updateCharacter)
    .delete(del.removeCharacter)
    .all(invalidRequestMethod);

router.route('/templates')
    .get(get.getManyTemplates)
    .post(post.createTemplate)
    .all(invalidRequestMethod);


router.route('/templates/:templateid')
    .get(get.getSingleTemplate)
    .post(post.updateTemplate)
    .delete(del.removeTemplate)
    .all(invalidRequestMethod);


router.use((req, res) => {
    res.status(404);
    res.json({ 'message':'Not found.' });
});

// Error handling
router.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        res.status(400);
        res.json({ 'message': 'Data invalid' });
    }
    else if (err.name === 'templateDataError') {
        res.status(400);
        res.json({ 'message': 'templateData invalid'});
    }
    else if (err.name === 'characterDataError') {
        res.status(400);
        res.json({ 'message': 'characterData invalid' });
    }
    // WARN: Not sure if character template id not existing in db is being caught
    else {
        res.status(500);
        if (IS_DEBUG) {
            res.json({ 'message': err.name, 'stack':new Error().stack } );
        }
        else {
            res.json({ 'message': 'Internal server error' });
        }
    }
});

export default router;
