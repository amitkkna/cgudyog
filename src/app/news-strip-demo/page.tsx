'use client';

import NewsStrip from '@/components/NewsStrip';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NewsStripDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {/* Top Scrolling Strip */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Position - Scrolling Variant</h2>
            <p className="text-gray-600 mb-6">Perfect for header placement with continuous scrolling news.</p>
            <div className="bg-white rounded-lg overflow-hidden">
              <NewsStrip
                position="top"
                variant="scrolling"
                autoPlay={true}
                speed={40}
                pauseOnHover={true}
                showClose={false}
                language="en"
              />
              <div className="p-8">
                <p className="text-gray-500">Content below the news strip...</p>
              </div>
            </div>
          </section>

          {/* Sliding Variant with Controls */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Inline Position - Sliding Variant with Controls</h2>
            <p className="text-gray-600 mb-6">Great for content sections with manual navigation controls.</p>
            <NewsStrip
              position="inline"
              variant="sliding"
              autoPlay={true}
              speed={60}
              pauseOnHover={true}
              showControls={true}
              showClose={true}
              maxItems={4}
              language="en"
              className="rounded-xl mb-6"
            />
          </section>

          {/* Static Variant */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Static Variant</h2>
            <p className="text-gray-600 mb-6">Displays multiple news items in a compact format.</p>
            <NewsStrip
              position="inline"
              variant="static"
              autoPlay={false}
              showClose={true}
              maxItems={3}
              language="en"
              className="rounded-xl mb-6"
            />
          </section>

          {/* Hindi Language Version */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Hindi Language - Scrolling</h2>
            <p className="text-gray-600 mb-6">Same component with Hindi language support.</p>
            <NewsStrip
              position="inline"
              variant="scrolling"
              autoPlay={true}
              speed={35}
              pauseOnHover={true}
              showClose={false}
              language="hi"
              className="rounded-xl mb-6"
            />
          </section>

          {/* Bottom Position */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Bottom Position - Sliding with Fast Speed</h2>
            <p className="text-gray-600 mb-6">Sticky bottom placement for important announcements.</p>
            <div className="bg-white rounded-lg min-h-96 relative">
              <div className="p-8">
                <p className="text-gray-500">Page content here...</p>
                <br />
                <p className="text-gray-500">The news strip will appear at the bottom of this container.</p>
              </div>
              <NewsStrip
                position="bottom"
                variant="sliding"
                autoPlay={true}
                speed={30}
                pauseOnHover={true}
                showControls={true}
                showClose={true}
                maxItems={5}
                language="en"
              />
            </div>
          </section>

          {/* Code Examples */}
          <section className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Usage Examples</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Basic Scrolling Strip</h3>
                <pre className="bg-gray-100 rounded-lg p-4 text-sm overflow-x-auto">
                  {`<NewsStrip 
  position="top"
  variant="scrolling"
  autoPlay={true}
  language="en"
/>`}
                </pre>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Sliding with Controls</h3>
                <pre className="bg-gray-100 rounded-lg p-4 text-sm overflow-x-auto">
                  {`<NewsStrip 
  position="inline"
  variant="sliding"
  autoPlay={true}
  speed={60}
  showControls={true}
  showClose={true}
  maxItems={4}
  language="en"
  className="rounded-xl"
/>`}
                </pre>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Hindi Language Support</h3>
                <pre className="bg-gray-100 rounded-lg p-4 text-sm overflow-x-auto">
                  {`<NewsStrip 
  variant="scrolling"
  language="hi"
  pauseOnHover={true}
/>`}
                </pre>
              </div>
            </div>
          </section>

          {/* Props Documentation */}
          <section className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Props</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-semibold">Prop</th>
                    <th className="text-left py-2 font-semibold">Type</th>
                    <th className="text-left py-2 font-semibold">Default</th>
                    <th className="text-left py-2 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b">
                    <td className="py-2 font-mono">position</td>
                    <td className="py-2">&apos;top&apos; | &apos;bottom&apos; | &apos;inline&apos;</td>
                    <td className="py-2">&apos;top&apos;</td>
                    <td className="py-2">Positioning of the news strip</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">variant</td>
                    <td className="py-2">&apos;scrolling&apos; | &apos;sliding&apos; | &apos;static&apos;</td>
                    <td className="py-2">&apos;scrolling&apos;</td>
                    <td className="py-2">Animation style</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">autoPlay</td>
                    <td className="py-2">boolean</td>
                    <td className="py-2">true</td>
                    <td className="py-2">Auto-advance news items</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">speed</td>
                    <td className="py-2">number</td>
                    <td className="py-2">60</td>
                    <td className="py-2">Animation speed (lower = faster)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">pauseOnHover</td>
                    <td className="py-2">boolean</td>
                    <td className="py-2">true</td>
                    <td className="py-2">Pause animation on hover</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">showControls</td>
                    <td className="py-2">boolean</td>
                    <td className="py-2">false</td>
                    <td className="py-2">Show navigation controls</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">showClose</td>
                    <td className="py-2">boolean</td>
                    <td className="py-2">false</td>
                    <td className="py-2">Show close button</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">maxItems</td>
                    <td className="py-2">number</td>
                    <td className="py-2">5</td>
                    <td className="py-2">Maximum news items to display</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-mono">language</td>
                    <td className="py-2">&apos;en&apos; | &apos;hi&apos;</td>
                    <td className="py-2">&apos;en&apos;</td>
                    <td className="py-2">Language for content display</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono">className</td>
                    <td className="py-2">string</td>
                    <td className="py-2">&apos;&apos;</td>
                    <td className="py-2">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
