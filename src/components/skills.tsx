type SkillProps = {
  id: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const Skill = ({ id, icon: Icon }: SkillProps): JSX.Element => {
  return (
    <div className="flex h-12 w-12 items-center justify-center text-[40px] hover:text-5xl hover:drop-shadow-sm">
      <Icon />
    </div>
  );
};

type SkillBoxProps = {
  label: string;
  skillProps: SkillProps[];
};

const SkillBox = ({ label, skillProps }: SkillBoxProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-2xl">{label}</span>
      <ul className="flex flex-row flex-wrap gap-3 border-y border-black p-3">
        {skillProps.map(({ id, icon }) => (
          <li key={id}>
            <Skill id={id} icon={icon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillBox;
