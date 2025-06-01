import skillTab from '@/data/skills.json'

function getSkillLevelIcons(skillLvl) {
  let starsIcons = ''
  for (let i = 0; i < parseInt(skillLvl); i++) starsIcons += String.fromCharCode(9733)
  for (let k = 0; k < 5 - parseInt(skillLvl); k++) starsIcons += String.fromCharCode(9734)
  return starsIcons
}

export { skillTab, getSkillLevelIcons }
