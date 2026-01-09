'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutContent() {
  const { t, isRTL } = useLanguage();

  const episodeStructure = isRTL ? [
    {
      title: 'פתיחה',
      duration: '2 דקות',
      description: 'ליאון ואביב מציגים את האורח עם סקירה מרתקת של הרקע, ההישגים והרלוונטיות שלו.',
    },
    {
      title: 'שורשים',
      duration: '5-10 דקות',
      description: 'ילדות, השפעות מפתח, חינוך, עבודות ראשונות, ונקודות המפנה שעיצבו את הדרך.',
    },
    {
      title: 'מסע הקריירה',
      duration: '15 דקות',
      description: 'צלילה עמוקה להישגים, רגעי מנהיגות, אתגרים, כישלונות, ולקחים. חילוץ המיץ.',
    },
    {
      title: 'האדם מאחורי',
      duration: '15 דקות',
      description: 'ערכים אישיים, עקרונות מנחים, הרגלים יומיומיים, פילוסופיית קבלת החלטות, משפחה, ופרויקטים צדדיים.',
    },
    {
      title: 'שאלות מהירות',
      duration: '5 דקות',
      description: 'שאלות מהירות: ספרים אהובים, מנטרות, מנטורים, ותחביבים.',
    },
  ] : [
    {
      title: 'Opening',
      duration: '2 min',
      description: 'Leon and Aviv introduce the guest with a captivating overview of their background, achievements, and relevance.',
    },
    {
      title: 'Roots',
      duration: '5-10 min',
      description: 'Childhood, key influences, education, first jobs, and the turning points that shaped their path.',
    },
    {
      title: 'Career Journey',
      duration: '15 min',
      description: 'Deep dive into achievements, leadership moments, challenges, failures, and lessons learned. Extracting the juice.',
    },
    {
      title: 'The Person Behind',
      duration: '15 min',
      description: 'Personal values, guiding principles, daily habits, decision-making philosophy, family, and side projects.',
    },
    {
      title: 'Quick Fire',
      duration: '5 min',
      description: 'Rapid questions: favorite books, mantras, mentors, and hobbies.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Mission Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 pt-32 bg-[#111]">
        <div className={`max-w-4xl ${isRTL ? 'mr-0 ml-auto text-right' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            {isRTL ? 'ראיונות אישיים עם מנהיגי נדל"ן' : 'Personal Interviews with RE Leaders'}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {isRTL
              ? 'The Rise & Fall הוא פודקאסט המוקדש לחשיפת הסיפורים האישיים מאחורי מנהיגי הנדל"ן המשפיעים ביותר. אנחנו הולכים מעבר לכותרות כדי לחקור את השורשים, המסע והפילוסופיה של אלה שמעצבים את הערים והקהילות שלנו.'
              : 'The Rise & Fall is a podcast dedicated to uncovering the personal stories behind real estate\'s most influential leaders. We go beyond the headlines to explore the roots, the journey, and the philosophy of those who shape our cities and communities.'}
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            {isRTL
              ? 'כל פרק עוקב אחרי מבנה מוקפד: מהשפעות הילדות לרגעים מעצבי קריירה, מכישלונות וחרטות לערכים אישיים והרגלים יומיומיים. אנחנו מחלצים את המיץ—הלקחים שחשובים.'
              : 'Each episode follows a carefully crafted structure: from childhood influences to career-defining moments, from failures and regrets to personal values and daily habits. We extract the juice—the lessons that matter.'}
          </p>
        </div>
      </section>

      {/* Hosts Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">{t('about.meetHosts')}</h2>
          <div className={`grid md:grid-cols-2 gap-16 ${isRTL ? 'direction-rtl' : ''}`}>
            {/* Aviv */}
            <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <div className="relative aspect-[3/4] mb-8 max-w-sm mx-auto md:mx-0">
                <img
                  src="/rise-and-fall-podcast/about/aviv.jpeg"
                  alt="Aviv"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-light mb-4">Aviv</h3>
              <p className="text-gray-400 leading-relaxed">
                {isRTL
                  ? 'הכוח היצירתי מאחורי הפקת הפודקאסט והנוכחות הדיגיטלית. אביב משלב מומחיות בסיפורים עם ידע טכני ליצירת תוכן מרתק שמהדהד בכל הפלטפורמות. הפרספקטיבה הרעננה שלו מבטיחה שכל פרק מתחבר לקהלים מודרניים.'
                  : 'The creative force behind the podcast\'s production and digital presence. Aviv combines storytelling expertise with technical know-how to create compelling content that resonates across platforms. His fresh perspective ensures every episode connects with modern audiences.'}
              </p>
            </div>

            {/* Leon */}
            <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <div className="relative aspect-[3/4] mb-8 max-w-sm mx-auto md:mx-0">
                <img
                  src="/rise-and-fall-podcast/about/leon.jpg"
                  alt="Leon"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-light mb-4">Leon</h3>
              <p className="text-gray-400 leading-relaxed">
                {isRTL
                  ? 'איש מקצוע מנוסה עם קשרים עמוקים בתעשיית הנדל"ן. ליאון מביא עשרות שנות ניסיון ורשת שפותחת דלתות למנהיגים המשפיעים ביותר של ישראל. סגנון הראיון שלו מאזן בין חום לשאלות חדות שחושפות את האדם מאחורי התואר.'
                  : 'A seasoned professional with deep connections in the real estate industry. Leon brings decades of experience and a network that opens doors to Israel\'s most influential leaders. His interviewing style balances warmth with incisive questions that reveal the person behind the title.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Structure */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#f5f5f5] text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
            {isRTL ? 'מבנה הפרק' : 'Episode Structure'}
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            {isRTL
              ? 'כל פרק עוקב אחרי פורמט מוכח שמיועד לחשוף את הסיפור המלא.'
              : 'Every episode follows a proven format designed to reveal the complete story.'}
          </p>
          <div className={`grid md:grid-cols-5 gap-6 ${isRTL ? 'direction-rtl' : ''}`}>
            {episodeStructure.map((section, index) => (
              <div key={section.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center mx-auto mb-4 text-lg font-light">
                  {index + 1}
                </div>
                <h3 className="text-lg font-medium mb-2">{section.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{section.duration}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#0a0a0a] text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-4">
          {isRTL ? 'רוצים להיות אורחים?' : 'Want to Be a Guest?'}
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          {isRTL
            ? 'אנחנו מחפשים מנהיגי נדל"ן עם סיפורים מרתקים. אם בניתם משהו יוצא דופן, נשמח לשמוע מכם.'
            : 'We\'re looking for real estate leaders with compelling stories. If you\'ve built something remarkable, we want to hear from you.'}
        </p>
        <Link href="/contact" className="btn-primary">
          {t('nav.contact')}
        </Link>
      </section>
    </div>
  );
}
