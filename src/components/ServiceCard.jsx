export default function ServiceCard({title, description, icon}){
  return (
    <article className="bg-white rounded-xl shadow p-6">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-semibold text-pcs-dark mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </article>
  );
}
