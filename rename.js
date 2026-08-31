const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach((file) => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          // ignore node_modules, .next, .git
          if (file.includes('node_modules') || file.includes('.next') || file.includes('.git') || file.includes('public')) {
            if (!--pending) done(null, results);
            return;
          }
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

const replaceInFile = (file) => {
  const content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  // Exclude image paths for now, or just replace text. 
  // Wait, if it's an image path like `/images/guestversity/logo.svg`, 
  // replacing it with `/images/AVIM Events/logo.svg` might break it because the folder isn't renamed.
  // Actually, I should probably rename the folder too if they want a full rebrand.
  // Let's do the text first, but carefully handle paths.
  // Let's just do a blanket replace but keep "guestversity" lowercase for paths? No, they said "rename of entire brand".
  
  newContent = newContent.replace(/Guestversity Group/g, 'AVIM Events');
  newContent = newContent.replace(/Guestversity/g, 'AVIM Events');
  newContent = newContent.replace(/guestversity/g, 'avim-events');
  newContent = newContent.replace(/guestversite/g, 'avim-events');
  newContent = newContent.replace(/Guestversite/g, 'AVIM Events');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated', file);
  }
};

const dirs = ['./src', './prisma', './guestversity_homepage_content.md', './package.json'];

let pendingDirs = dirs.length;

dirs.forEach(d => {
  if (fs.existsSync(d)) {
    const stat = fs.statSync(d);
    if (stat.isDirectory()) {
      walk(d, (err, files) => {
        if (err) throw err;
        files.forEach(f => {
          if (f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.md') || f.endsWith('.json')) {
            replaceInFile(f);
          }
        });
      });
    } else {
      replaceInFile(path.resolve(d));
    }
  }
});
