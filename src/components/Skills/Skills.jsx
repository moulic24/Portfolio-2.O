import React, { useMemo, useState } from 'react';
import { SKILLS } from '../../utils/data';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...SKILLS.map((item) => item.title)],
    []
  );

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') {
      return SKILLS.flatMap((group) =>
        group.skills.map((skill) => ({
          name: skill.skill,
          category: group.title,
        }))
      );
    }

    const categoryData = SKILLS.find((group) => group.title === activeCategory);
    return (categoryData?.skills || []).map((skill) => ({
      name: skill.skill,
      category: activeCategory,
    }));
  }, [activeCategory]);

  const createBadge = (name) =>
    name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  return (
    <section className='skills-container'>
      <div className='skills-text'>
        <span>Skills</span>
      </div>

      <div className='skills-filters'>
        {categories.map((category) => (
          <button
            key={category}
            type='button'
            className={`skill-filter-pill ${
              activeCategory === category ? 'active' : ''
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='skills-grid'>
        {filteredSkills.map((skillItem) => (
          <div className='skill-grid-card' key={`${skillItem.category}-${skillItem.name}`}>
            <div className='skill-grid-icon'>{createBadge(skillItem.name)}</div>
            <p>{skillItem.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
