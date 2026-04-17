import { useState } from "react";
import frameworkData from "./framework.json";


export default function FrameworkListSearchFilter() {

    		/** Deklrasai state **/
		//const [searchTerm, setSearchTerm] = useState("");
		//const [selectedTag, setSelectedTag] = useState("");

        	/*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};
		



          /** Deklrasai Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name
				.toLowerCase()
				.includes(_searchTerm) ||
      framework.description
				.toLowerCase()
				.includes(_searchTerm);

     const matchesTag = dataForm.selectedTag ? framework.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];




    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Header section agar lebih profesional */}
            <div className="max-w-6xl mx-auto mb-10 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                    Tech <span className="text-blue-600">Frameworks</span>
                </h1>
                <p className="mt-2 text-gray-500 text-lg">Eksplorasi teknologi terbaik untuk pengembangan modern.</p>
            </div>

            {/* Grid Layout: Responsif 1 kolom di HP, 2 di tablet, 3 di Desktop */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <input
  type="text"
  name="searchTerm"
  placeholder="Search framework..."
  className="w-full p-2 border border-gray-300 rounded mb-4"
    onChange={handleChange}
    
/>

<select
  name="selectedTag"
  className="w-full p-2 border border-gray-300 rounded mb-4"
    onChange={handleChange}
    
>
  <option value="">All Tags</option>
</select>
                {frameworkData.map((item) => (
                    <div 
                        key={item.id} 
                        className="group relative bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                    >
                        {/* Efek aksen garis warna di bagian atas saat hover */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                    {item.name}
                                </h2>
                                <span className="text-[10px] uppercase tracking-widest font-semibold bg-gray-100 text-gray-500 px-2 py-1 rounded">
                                    {item.details.developer}
                                </span>
                            </div>



                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {item.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className="text-[11px] font-medium px-3 py-1 bg-blue-50 text-blue-700 rounded-lg border border-blue-100"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tombol Aksi yang lebih 'tombol banget' */}
                        <a 
                            href={item.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full py-3 px-4 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-blue-600 transition-colors duration-200 group-hover:shadow-lg"
                        >
                            Visit Official Site
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}