
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Search, Phone, Mail, ExternalLink } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ContactInfo {
  emails: string[];
  phoneNumbers: string[];
  url: string;
}

const WebsiteScanner = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<ContactInfo | null>(null);

  const extractContactInfo = (html: string, url: string): ContactInfo => {
    // Email regex pattern
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    
    // Phone number regex patterns (various formats)
    const phoneRegex = /(\+?1?[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})\b|(\+?44[-.\s]?)?(\(?0?[1-9]\d{1,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4})|(\+?[1-9]\d{1,14})/g;

    const emails = [...new Set(html.match(emailRegex) || [])];
    const phoneMatches = html.match(phoneRegex) || [];
    const phoneNumbers = [...new Set(phoneMatches.filter(phone => 
      phone.replace(/[^\d]/g, '').length >= 7 && phone.replace(/[^\d]/g, '').length <= 15
    ))];

    return {
      emails,
      phoneNumbers,
      url
    };
  };

  const scanWebsite = async () => {
    if (!url) return;

    setIsScanning(true);
    setResults(null);

    try {
      // Use a CORS proxy to fetch the website content
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
      const response = await fetch(proxyUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch website content');
      }

      const data = await response.json();
      const html = data.contents;

      const contactInfo = extractContactInfo(html, url);
      setResults(contactInfo);

      toast({
        title: "Scan completed!",
        description: `Found ${contactInfo.emails.length} emails and ${contactInfo.phoneNumbers.length} phone numbers.`,
      });
    } catch (error) {
      console.error('Error scanning website:', error);
      toast({
        title: "Scan failed",
        description: "Unable to scan the website. Please check the URL and try again.",
        variant: "destructive",
      });
    } finally {
      setIsScanning(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    scanWebsite();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Website Contact Scanner
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="website-url">Website URL</Label>
              <Input
                id="website-url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                required
              />
            </div>
            <Button type="submit" disabled={isScanning} className="w-full">
              {isScanning && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isScanning ? 'Scanning...' : 'Scan Website'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {results && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              Scan Results for {results.url}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Email Addresses ({results.emails.length})
              </h3>
              {results.emails.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {results.emails.map((email, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {email}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No email addresses found</p>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                Phone Numbers ({results.phoneNumbers.length})
              </h3>
              {results.phoneNumbers.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {results.phoneNumbers.map((phone, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {phone}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No phone numbers found</p>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WebsiteScanner;
